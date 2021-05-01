import { note as teoriaNote } from 'teoria'
import { notesIn } from './data'

/**
 * Represents a single playable element (Note, Scale, Chord, Mode, Triad or Rest)
 */
// FIXME: Support rests (~)
export class Element {

  constructor (data, store) {
    // this.data = data
    this.data = this.parse(data)
    this.store = store
  }

  get id () {
    return this.uid(this.data.id)
  }

  get value () {
    // return this.inputs[0]
    return this.data.value
  }

  get props () {
    return this.data.props
  }
  // get inputs () {
  //   return this.data['arguments']
  // }

  get kind () {
    return this.data.kind//.toLowerCase()
  }

  get duration () {
    return this.data.duration
  }

  get notes () {
    return notesIn(this.kind, this.value)
  }

  get musical () {
    return MUSICAL_ELEMENTS.includes(this.kind)
  }

  parse (data) {
    if (typeof data === 'string') {
      return this.resolve(data)
    }

    // TODO: Validate with json-schema
    return data
  }

  resolve (id) {
    const [kind, uid] = id.split('.')
    const elem = this.store[kind][uid]

    return Object.assign({}, elem, { id: uid, kind })
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

  static uid (id) {
    return id.split('.').pop()
  }

}

export class Elements {

  // constructor (source, store) {
  constructor ({ source, store, as }) {
    this.data = compose(source)
    this.store = Elements.normalize(store || this.data.elements, as)
  }

  get all () {
    // return Elements.cast(this.data)
    return this.kinds.map(kind => {
      return Object.values(this.store[kind])
    })
  }

  get kinds () {
    // return Object.keys(this.data.elements)
    return Object.keys(this.store)
  }

  static normalize (elements, as = _ => _) {
  // static cast (elements, as = _ => _) {
    const elems = Object.entries(elements)

    return elems.reduce((acc, [kind ids]) =>
      Object.entries(ids)
        .reduce(([[id, elem]) =>
          Object.assign(acc, {
            [id]: as({ id, kind, ...elem })
          })
      , {})
    , {})
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

  // constructor (data) {
  constructor (data, store) {
    this.data = data
    this.store = store
    // TODO: Consider using nanoid to generate pseudo-unique beat identifiers
    // this.id = id || nanoid()
  }

  get duration () {
    // return this.exists ? this.data.duration : 0
    return this.data.duration
  }

  // TODO: Probably replace with `get elements`
  // get items () {
  //   // if (this.empty) return []

  //   return this.data.items.map(item => new Element(item, store))
  // }

  get items () {
    return this.data.items
  }

  get elements () {
    // return this.items.map(item => new Element(item, store))
    return this.items.reduce((all, item) => {
      return all.concat(
        item.elements.map(item => new Element(item, this.store))
      )
    }, [])
  }

  get kinds () {
    // return [...new Set(this.items.map(({ kind }) => kind))]
    return [...new Set(this.elements.map(({ kind }) => kind))]
  }

  // TODO: Refactor now that we can have multiple `kinds` occuring on the same beat (via new id)
  //  - Should also now use `elements` instead of `items`
  get values () {
    // return this.items.reduce((acc, item) => {
    return this.elements.reduce((acc, item) => {
      return Object.assign(acc, { [item.kind]: item.value })
    }, {})
  }

  // get empty () {
  //   return !this.data
  // }

  // get exists () {
  //   return !this.empty
  // }

  get musical () {
    // return this.items.every(item => item.musical)
    return this.elements.every(elem => elem.musical)
  }

  first (kind) {
    // return this.items.find(item => kind == item.kind)
    return this.elements.find(elem => kind == elem.kind)
  }

  // static from (beats) {
  static from (beats, store) {
    // TODO: Can do away with this check now
    if (Array.isArray(beats)) {
      return beats.map(beat => new Beat(beat, store))
    }

    return new Beat(beats, store)
  }

}

export const MUSICAL_ELEMENTS = ['note', 'chord', 'scale'] // penta
