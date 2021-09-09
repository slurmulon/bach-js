import bach from 'bach-cljs'
import { valid } from './validate'

/**
 * Either "composes" raw bach data into bach.json or, when provided an object, validates its structure as bach.json.
 * Given a string, automatically upgrades source to v3 (simple replacement of !play with play!).
 * Main entry point for integrating with core bach ClojureScript library.
 */
export function compose (source, strict = true) {
  if (typeof source === 'string') {
    const upgraded = source.replace(/!play/i, 'play!')

    return bach.compose(upgraded)
  }

  if (typeof source === 'object') {
    return strict ? valid(source) : source
  }

  throw TypeError(`Unsupported Bach.JSON data type (${typeof source}). Must be a bach.json object or raw bach string.`)
}
