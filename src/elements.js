import { note as teoriaNote } from 'teoria'
import { notesIn } from './data'

/**
 * Represents a single playable element (Note, Scale, Chord, Mode, Triad or Rest)
 */
// FIXME: Support rests (~)
export class Element {

  constructor (data) {
    this.data = data
    // TODO: Consider using nanoid to generate pseudo-unique beat element identifiers
    // this.id = id || nanoid()
  }

  get value () {
    return this.inputs[0]
  }

  get inputs () {
    return this.data['arguments']
  }

  get kind () {
    return this.data.keyword.toLowerCase()
  }

  get notes () {
    return notesIn(this.kind, this.value)
  }

  get musical () {
    return MUSICAL_ELEMENTS.includes(this.kind)
  }

  // TODO: Refactor to use data/scaleify and data/chordify
  identify () {
    try {
      teoria.note(this.value)

      return 'note'
    } catch (_) {}

    try {
      const [key, scale] = this.value.split(' ')

      teoria.note(key).scale(scale.toLowerCase())

      return 'scale'
    } catch (_) {}

    // FIXME: Make this support an optional octave (e.g. "Cm" and "C2m")
    try {
      const [key, chord] = [this.value.substring(0,2), this.value.substring(2)]

      teoria.note(key).chord(chord.toLowerCase())

      return 'chord'
    } catch (_) {}
  }

}

/**
 * Represents a single beat in a track.
 *
 * Beats are represented as a tuple and may contain multiple elements
 *
 * duration -> items (elements)
 */
export class Beat {

  constructor (data) {
    this.data = data
    // TODO: Consider using nanoid to generate pseudo-unique beat identifiers
    // this.id = id || nanoid()
  }

  get duration () {
    return this.exists ? this.data.duration : 0
  }

  get items () {
    if (this.empty) return []

    return this.data.items.map(item => new Element(item))
  }

  get kinds () {
    return [...new Set(this.items.map(({ kind }) => kind))]
  }

  get values () {
    return this.items.reduce((acc, item) => {
      return Object.assign(acc, { [item.kind]: item.value })
    }, {})
  }

  get empty () {
    return !this.data
  }

  get exists () {
    return !this.empty
  }

  get musical () {
    return this.items.every(item => item.musical)
  }

  first (kind) {
    return this.items.find(item => kind == item.kind)
  }

  static from (beats) {
    if (Array.isArray(beats)) { // in other words, a measure
      return beats.map(beat => new Beat(beat))
    }

    return new Beat(beats)
  }

}

export const MUSICAL_ELEMENTS = ['note', 'chord', 'scale']
