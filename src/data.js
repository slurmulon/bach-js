import bach from 'bach-cljs'
import { Beat } from './elements'
import { Note } from './note'
import { valid } from './validate'
import {
  scale as teoriaScale,
  chord as teoriaChord,
  Scale as TeoriaScale,
  Chord as TeoriaChord
} from 'teoria'

// Either "composes" raw bach data into bach.json or, when provided an object, validates its structure as bach.json.
// Main entry point for integrating with core bach ClojureScript library.
export const compose = source => {
  if (typeof source === 'string') {
    return bach(source)
  }

  if (typeof source === 'object') {
    return valid(source)
  }

  throw TypeError(`Unsupported Bach.JSON data type (${typeof source}). Must be a bach.json object or raw bach string.`)
}

// Creates Bach.JSON beat elements from minimal data.
// WARN: Now dup'd in rebach
export const atomize = (kind, value) => ({
  keyword: kind.toLowerCase(),
  arguments: [value]
})

// Consumes bach.json source data and parses/normalizes each beat.
// Light-weight alternative to using Track constructor.
export const normalize = source => {
  const bach = typeof source === 'string' ? compose(source) : source

  return Object.assign({}, bach, {
    data: bach.data.map(Beat.from)
  })
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
    return teoriaScale(tonic, type.toLowerCase())
  } else if (value instanceof TeoriaScale) {
    return value
  }

  throw TypeError(`Unknown scale type (${typeof value}): ${value}`)
}

export function chordify (value) {
  if (typeof value === 'string') {
    return teoriaChord(value)
  } else if (value instanceof TeoriaChord) {
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
  const notes = notesOf[kind]

  if (notes) {
    return notes(value)
  }

  return []

  // return value
  //   ? kind === 'chord'
  //     ? notesInChord(value)
  //     : notesInScale(value)
  //   : []
}

export const notesOf = {
  note:  value => value,
  chord: value => notesInChord(value),
  scale: value => notesInScale(value),
  penta: value => notesInScale(value)
}

// TODO: Note.valueOf
export function notesIntersect (left, right) {
 return left.filter(note => right.includes(note))
}

// TODO: Use empty-schema (or another approach) to return default bach.json ehaders instead of empty object
export const headersOf = source => (source && source.headers) || {}

export const unitsOf = source => ({
  beat: headersOf(source)['beat-unit'] || 1/4,
  pulse: headersOf(source)['pulse-beat'] || 1/4,
  second: 1,
  ms: 1/1000
})

export const barsOf = source => ({
  beat: headersOf(source)['beat-units-per-measure'] || 4,
  pulse: headersOf(source)['pulse-beats-per-measure'] || 4
})

export const durationsOf = source => ({

})

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
  headersOf,
  unitsOf,
  barsOf,
  simplifyBeatItem,
  partitionBeat
}
