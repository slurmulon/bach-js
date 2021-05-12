import { note as teoriaNote } from 'teoria'
import { compose } from './data'
import { Note } from './note'

/**
 * Represents a single playable element (Note, Scale, Chord, Mode, Triad or Rest)
 */
export class Element {

  constructor (data) {
    this.data = data
  }

  get id () {
    return `${this.data.kind}.${this.data.id}`
  }

  get uid () {
    return Element.uid(this.id)
  }

  get value () {
    return this.data.value
  }

  get props () {
    return this.data.props
  }

  get kind () {
    return this.data.kind//.toLowerCase()
  }

  get duration () {
    return this.data.duration
  }

  get notes () {
    return Note.all(this.kind, this.value)
  }

  get musical () {
    return MUSICAL_ELEMENTS.includes(this.kind)
  }

  static uid (id) {
    return id.split('.').pop()
  }

}

export class Elements {

  constructor ({ source, store, cast } = {}) {
    this.source = compose(source)
    this.cast = cast || (_ => _)
    this.data = store || Elements.cast(this.source.elements, cast)
  }

  get all () {
    return this.kinds.flatMap(kind =>
      Object.values(this.data[kind])
        .map(elem => new Element(elem))
    )
  }

  get kinds () {
    return Object.keys(this.data)
  }

  get values () {
    return this.all.map(elem => elem.value)
  }

  get ids () {
    return this.all.map(elem => elem.id)
  }

  get (id) {
    const parts = typeof id === 'string' ? id.split('.') : []

    if (parts.length === 2) {
      const [kind, uid] = parts
      const elem = this.data[kind][uid]

      return elem ? { ...elem, id: uid, kind } : null
    }

    throw TypeError('Element id must be a string in the format of "kind.hash"')
  }

  resolve (elem) {
    if (elem instanceof Element) return elem
    if (typeof elem === 'string') return this.get(elem)
    if (typeof elem === 'object') return new Element(this.cast(elem))

    throw TypeError('Failed to resolve element, unsupported data type')
  }

  static cast (elements, as = _ => _) {
    if (!elements) return null
    // TODO: Validate element shape with JSON Schema
    return Object.entries(elements)
      .reduce((acc, [kind, ids]) => {
        const elems = Object.entries(ids)
          .reduce((acc, [id, elem]) => ({
            ...acc,
            [id]: as({ id, kind, ...elem })
          }), {})

        return { ...acc, [kind]: elems }
      }, {})
  }

}

export const MUSICAL_ELEMENTS = ['note', 'chord', 'scale'] // penta
