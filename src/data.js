import { Beat } from './elements'
import { Note } from './note'
import validate from './validate'
import teoria from 'teoria'

// Creates Bach.JSON beat elements from minimal data.
// WARN: Now dup'd in rebach
export const atomize = (kind, value) => ({
  keyword: kind.toLowerCase(),
  arguments: [value]
})

// Consumes bach.json source data and parses/normalizes each beat.
// Light-weight alternative to using Track constructor.
export const normalize = source => {
  if (validate(source)) {
    return Object.assign({}, source, {
      data: source.data.map(Beat.from)
    })
  }

  console.error(validate.errors)

  throw TypeError('Invalid Bach.JSON data')
}

// Converts a parsed Track's `data` back into its serialized form (vanilla bach.json).
export const serialize = track => {
  const data = track.data
    .map(measure => {
      return measure.map(beat => {
        return beat && beat.data
      })
    })

  return Object.assign({}, track, { data })
}

// Creates a reduced and simplified version of the track with only populated sections.
// Ideal data format for high-level iteration and/or cursor tracing in bach engines.
export const sectionize = source => source.data
  .map(measure =>
    measure
      .filter(beat => !!beat.data)
      .map(partitionBeat)
  )
  .reduce((all, one) => all.concat(one), [])

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

// Provides a reduced/simplified representation of a Bach beat item/element
export const simplifyBeatItem = item => {
  const { keyword, arguments: [value] } = item
  const kind = keyword.toLowerCase()

  return { kind, value }
}

// Expands a beat and its items into a usable object grouped by "parts".
// TODO: Instead of "parts" we should probably stick with "items", to be consistent with Bach
export const partitionBeat = beat => beat.data.items
  .map(simplifyBeatItem)
  .reduce((acc, item) => {
    const parts = Object.assign({}, acc.parts, {
      [item.kind]: item.value
    })

    return Object.assign(acc, {
      duration: beat.data.duration,
      parts
    })
  }, {})


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
    .map(note => Note.valueOf(note))
}

export function notesInScale (value) {
  return scaleify(value)
    .notes()
    .map(note => Note.valueOf(note))
}

export function notesIn (kind, value) {
  return value
    ? kind === 'chord'
      ? notesInChord(value)
      : notesInScale(value)
    : []
}

export default {
  atomize,
  normalize,
  serialize,
  sectionize,
  scaleify,
  chordify,
  scaleToString,
  notesInChord,
  notesInScale,
  notesIn,
  simplifyBeatItem,
  partitionBeat
}
