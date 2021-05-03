import { note as teoriaNote } from 'teoria'
import { notesIn } from './data'
import { compose } from './data'

/**
 * Represents a single playable element (Note, Scale, Chord, Mode, Triad or Rest)
 */
// FIXME: Support rests (~)
export class Element {

  constructor (data) {
  // constructor (data, store) {
    this.data = data
    // this.data = this.parse(data)
    // this.store = store
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

  // parse (data) {
  //   if (typeof data === 'string') {
  //     return this.resolve(data)
  //   }

  //   // TODO: Validate with json-schema
  //   return data
  // }

  // resolve (id) {
  //   const [kind, uid] = id.split('.')
  //   const elem = this.store[kind][uid]

  //   return Object.assign({}, elem, { id: uid, kind })
  // }

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

  constructor ({ source, store, cast } = {}) {
    this.data = compose(source)
    this.store = store || Elements.cast(this.data.elements, cast)
  }

  get all () {
    return this.kinds.map(kind => new Element(this.store[kind]))
  }

  get kinds () {
    // return Object.keys(this.data.elements)
    return Object.keys(this.store)
  }

  get values () {
    return this.all.map(elem => elem.value)
  }

  resolve (id) {
    const [kind, uid] = id.split('.')
    const elem = this.store[kind][uid]

    return Object.assign({}, elem, { id: uid, kind })
  }

  // static normalize (elements, cast = _ => _) {
  static cast (elements, as = _ => _) {
    return Object.entries(elements)
      .reduce((acc, [kind, ids]) => {
        // console.log('kind, ids', kind, ids)
        const elems = Object.entries(ids)
          .reduce((acc, [id, elem]) => {
            // console.log(' --- id, elem', id, elem)
            return Object.assign(acc, {
              [id]: as({ id, kind, ...elem })
            })
          }, {})

        return { ...acc, [kind]: elems }
      }, {})
  }

}

export const MUSICAL_ELEMENTS = ['note', 'chord', 'scale'] // penta
