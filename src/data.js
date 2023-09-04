import { compose as parse } from 'bach-cljs'
import { valid } from './validate'
import {
  scale as teoriaScale,
  chord as teoriaChord,
} from 'teoria'

/**
 * Either "composes" raw bach data into bach.json or, when provided an object, validates its structure as bach.json.
 * Given a string, automatically upgrades source to v3 (simple replacement of !play with play!).
 * Main entry point for integrating with core bach ClojureScript library.
 */
export const compose = (source, strict = true) => {
  if (typeof source === 'string') {
    const upgraded = source.replace(/!play/i, 'play!')

    return parse(upgraded)
  }

  if (typeof source === 'object') {
    return strict ? valid(source) : source
  }

  throw TypeError(`Unsupported Bach.JSON data type (${typeof source}). Must be a bach.json object or raw bach string.`)
}

export const compile = (source, strict = true) => {
  const data = compose(source, strict)

  return JSON.parse(JSON.stringify(data))
}

export function scaleify (value) {
  if (typeof value === 'string') {
    const [tonic, type] = value.split(' ')

    return teoriaScale(tonic, type.toLowerCase())
  } else if (typeof value === 'object') {
    return value
  }

  throw TypeError(`Unknown scale type (${typeof value}): ${value}`)
}

export function chordify (value) {
  if (typeof value === 'string') {
    return teoriaChord(value)
  } else if (typeof value === 'object') {
    return value
  }

  throw TypeError(`Unknown chord type (${typeof value}): ${value}`)
}

export function scaleToString (scale) {
  return `${scale.tonic.toString().slice(0,2)} ${scale.name}`
}
