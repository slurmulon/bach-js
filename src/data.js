import bach from 'bach-cljs'
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
    // FIXME: Enable again once bach-json-schema is updated to v3
    // return valid(source)
    return source
  }

  throw TypeError(`Unsupported Bach.JSON data type (${typeof source}). Must be a bach.json object or raw bach string.`)
}

// REMOVE
// Creates Bach.JSON beat elements from minimal data.
// WARN: Now dup'd in rebach
// export const atomize = (kind, value) => ({
//   keyword: kind.toLowerCase(),
//   arguments: [value]
// })

// REMOVE
// Consumes bach.json source data and parses/normalizes each beat.
// Light-weight alternative to using Track constructor.
// export const normalize = source => {
//   const bach = typeof source === 'string' ? compose(source) : source

//   return Object.assign({}, bach, {
//     data: bach.data.map(Beat.from)
//   })
// }

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

// REMOVE
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
}

// TODO: Allow custom note resolvers to be registered globally or locally so people can easily define their own semantics
//  - Could call this `itemsOf` to be more generic and flexible
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

// export const intervalsOf = source => ({
//   // pulse: headersOf(source)['ms-per-pulse-beat'],
//   // beat: headersOf(source)['ms-per-beat-unit']
//   step: source.units.beat.step,
//   pulse: source.units.beat.pulse
// })

export const unitsOf = source => ({
  // beat: headersOf(source)['beat-unit'] || 1/4,
  // pulse: headersOf(source)['pulse-beat'] || 1/4,
  step: source.units.beat.step,
  pulse: source.units.beat.pulse,
  bar: source.units.bar.step,
  ms: 1/1000
})

// export const barsOf = source => ({
//   // beat: headersOf(source)['beat-units-per-measure'] || 4,
//   // pulse: headersOf(source)['pulse-beats-per-measure'] || 4,
//   bar: 1
//   // measure: 1
// })

export const timesOf = source => {
  // const intervals = intervalsOf(source)
  // const beats = source.units.beat
  // const bars = source.units.bar
  // const bar = bars.pulse * intervals.pulse
  const { time } = source.units

  // TODO: Probably move most if not all of these into unitsOf, and then just modify here post-calc
  //  - Could have `unitsOf` accept an option `scale` prop (defaulting to 1) that determiens the reference unit
  //  - UPDATE: Can just replace unitsOf with this (rename timesOf to unitsOf)
  const units = {
    ms: 1,
    second: 1000,
    // pulse: intervals.pulse,
    // beat: intervals.beat,
    step: time.step,
    pulse: time.pulse,
    bar: time.bar,
    // measure: bar,
    // half: bar / 2,
    '2n': time.bar / 2,
    '4n': time.bar / 4,
    '8n': time.bar / 8,
    '16n': time.bar / 16,
    '32n': time.bar / 32,
    '64n': time.bar / 64,
    '4up': time.bar - (time.bar / 4),
    '8up': time.bar - (time.bar / 8)
  }

  // TODO: After we replace teoria with tone, this can be done more dynamically (standardize around their notation duration format)
  const aliases = {
    's': units.step,
    'p': units.pulse,
    // '1m': units.bar,
    'm': units.bar
    // '4n': units.4n,
    // '8n': units.8n,
    // '16n': units.16n,
    // '32n': bar / 32,
    // '64n': bar / 64
  }

  return Object.assign(units, aliases)
}

// TODO: Remove, can just use signals now
// export const steps = (ratio, all) => {
//   ratio %= 1

//   if (ratio < 0) ratio += 1

//   return all[Math.floor(ratio * all.length)]
// }

// TODO: Just remove, pointless
export default {
  // atomize,
  // normalize,
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
  // barsOf,
  simplifyBeatItem,
  partitionBeat
}
