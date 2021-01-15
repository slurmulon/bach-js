import { Beat } from './elements'
import { Note } from './note'
import validate from './validate'
import teoria from 'teoria'

// Creates Bach.JSON beat elements from minimal data
// WARN: Now dup'd in rebach
export const atomize = (kind, value) => ({
  keyword: kind.toLowerCase(),
  arguments: [value]
})

// TODO: Seems we should just use 'new Track' instead. Remove.
export const normalize = source => {
  if (validate(source)) {
    return Object.assign({}, source, {
      data: source.data.map(Beat.from)
    })
  }

  console.error(validate.errors)

  throw TypeError('Invalid Bach.JSON data')
}

// Converts a parsed Track's `data` back into its serialized form (vanilla bach.json)
//  - Perhaps better suited as a static method on Track
export const serialize = track => {
  const data = track.data
    .map(measure => {
      return measure.map(beat => {
        return beat && beat.data
      })
    })

  return Object.assign({}, track, { data })
}

// Creates a reduced and simplified version of the track with only populated sections
export const sectionize = source => source.data
  .map(measure =>
    measure
      .filter(beat => !!beat.data)
      .map(simplifyBeat)
  )
  .reduce((all, one) => all.concat(one), [])

// TODO: Probably move this into a more specific `section` module
export const traversed = source => {
  const sections = sectionize(source)
  // TODO: Move into `section` module
  // const clamp = index => index % sections.length
  const clamp = index => {
    const key = index >= 0 ? index : sections.length + index
    return key % sections.length
  }

  return sections.map((section, index) => {
    // TODO: Consider refactoring section to this struct: { duration: 1, parts: { ... } } to avoid use of `omit`
    // const parts
    const { duration } = section
    const base = omit(section, ['duration'])
    // const { duration, ...section } = data
    const key = clamp(index)

    console.log('[traverse section] duration', duration)

    // const notes = notesIn(
    return Object.entries(base)
      .reduce((acc, [kind, value]) => {
        const prev = sections[clamp(key - 1)]
        const next = sections[clamp(key + 1)]

        // console.log('--- traverse prev, next', prev, next)

        // return compareSections(prev, base, next)
        return Object.assign(acc, compareSections(prev, base, next))
        // return Object.assign(kind, { [kind]: value })
      // }, {})
      }, { duration })
  })

  // TODO
  // {
  //   chord: { value: 'Cmaj7',
  //   notes: [],
  //   delta: { 'C2': { prev: false, next: true }
}

// Groups sequentially identical phrases by summation of duration:
// TODO
export const condense = source => {
  // e.g.
  // [1 -> :A, 3 -> :A]
  //    becomes
  // [4 -> :A]
  //
  // Note: Does not wrap head and tail if there's more than 2 elements
}

export function compareSections (prev, base, next) {
  const { duration } = base
  const root = omit(base, ['duration'])
  // const root = Object.assign({}, base)
  // delete root.duration
  //
  console.log('[compare] duration', duration)

  return Object.entries(root)
    .reduce((acc, [kind, value]) => {
      console.log('---- compare value, prev, next', value, prev[kind], next[kind])
      const notes = {
        root: notesIn(kind, value),
        prev: notesIn(kind, prev[kind]),
        next: notesIn(kind, next[kind])
      }

      console.log('----------- notes prev, next', notes.prev, notes.next)

      const delta = notes.root.reduce((diffs, note) => {
        return Object.assign(diffs, {
          [note]: {
            prev: notes.prev.some(prev => Note.equals(note, prev)),
            next: notes.next.some(next => Note.equals(note, next))
          }
        })
      }, {})

      return Object.assign(acc, {
        [kind]: {
          value,
          delta,
          notes: notes.root
        }
      })
    // }, base)
    }, { duration })
}

// Provides a reduced/simplified representation of a Bach beat item/element
export const simplifyBeatItem = item => {
  const { keyword, arguments: [value] } = item
  const kind = keyword.toLowerCase()

  return { kind, value }
}

// Provides a reduced/simplified representation of a Bach beat and its items
export const simplifyBeat = beat => beat.data.items
  .map(simplifyBeatItem)
  .reduce((acc, item) => Object.assign(acc, {
    duration: beat.data.duration,
    [item.kind]: item.value
  }), {})

// TODO: Move to new 'note' module
// export const generalizeNote = note => {
//   const value = teoria.note(note).midi() % 12
// }

// // TODO: Move to new 'note' module
// export const reduceNotes = (notes = []) => {
//   const keys = notes.map(note => teoria.note(note).midi() % 12)
// }
//

export function scaleify (value) {
  if (typeof value === 'string') {
    const [tonic, type] = value.split(' ')

    // TODO: Potentially use type.toLowerCase instead, to guarantee smooth interopability
    return teoria.scale(tonic, type)
  } else if (value instanceof teoria.Scale) {
    return value
  }

  throw TypeError(`Unknown scale type (${typeof value}): ${value}`)
}

export function chordify (value) {
  if (typeof value === 'string') {
    return teoria.chord(value)
  } else if (value instanceof teoria.Chord) {
    return value
  }

  throw TypeError(`Unknown chord type (${typeof value}): ${value}`)
}

export function scaleToString (scale) {
  return `${scale.tonic.toString().slice(0,2)} ${scale.name}`
}

export function notesInChord (value) {
  return chordify(value)
    .notes()
    .map(note => note.toString())
}

export function notesInScale (value) {
  return scaleify(value)
    .notes()
    .map(note => note.toString())
}

// TODO: Make this less explicit and rigid (e.g. map kind -> note parser)
export function notesIn (kind, value) {
  return value
    ? kind === 'chord'
      ? notesInChord(value)
      : notesInScale(value)
    : []
}

// TODO: Upgrade Babel to 7 to use rest-spread
// export function pick (obj, props) {
//   return Object.assign({}, ...props.map(prop => ({ [prop]: obj[prop] })))
// }

// export function omit (obj, props) {
//   return pick(obj, Object.keys(obj).filter(key => !props.includes(key)))
// }
function omit (obj, props) {
  return Object.keys(obj).reduce((acc, key) => {
    if (!props.includes(key)) {
       acc[key] = obj[key]
    }

    return acc
  }, {})
}

export default {
  atomize,
  normalize,
  serialize,
  scaleify,
  chordify,
  scaleToString,
  notesInChord,
  notesInScale,
  notesIn,
  simplifyNote,
  simplifyBeat
}
