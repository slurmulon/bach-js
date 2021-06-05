const bach = require('bach-cljs')
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
    return bach.compose(source)
  }

  if (typeof source === 'object') {
    return valid(source)
  }

  throw TypeError(`Unsupported Bach.JSON data type (${typeof source}). Must be a bach.json object or raw bach string.`)
}

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
// export const headersOf = source => (source && source.headers) || {}

// TODO: Remove
export const unitsOf = source => ({
  step: source.units.beat.step,
  pulse: source.units.beat.pulse,
  bar: source.units.bar.step,
  ms: (1 / source.units.time.bar)
})

export const timesOf = source => {
  const { time: { step, pulse, bar } } = source.units

  return {
    ms: 1,
    second: 1000,
    step,
    pulse,
    bar,
    's': step,
    'p': pulse,
    'm': bar,
    '2n': bar / 2,
    '4n': bar / 4,
    '8n': bar / 8,
    '16n': bar / 16,
    '32n': bar / 32,
    '64n': bar / 64,
    '4up': bar - (bar / 4),
    '8up': bar - (bar / 8)
  }
}
