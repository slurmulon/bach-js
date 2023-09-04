import { elementize } from 'bach-cljs'
import { note as teoriaNote } from 'teoria'

import { compose } from './data'
import { Note } from './note'

/**
 * Represents a single and unique playable element.
 * Uniqueness and equality are determined by `id`.
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
    return this.data.props || []
  }

  get kind () {
    return this.data.kind.toLowerCase()
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

/**
 * Provides a centralized and shareable store of parsed elements in a bach track.
 */
export class Elements {

  constructor ({ source, store, cast } = {}) {
    // this.source = compose(source)
    this.source = compose(source, false)
    this.cast = cast || (_ => _)
    this.data = store || Elements.cast(this.source.elements, this.cast)
  }

  get all () {
    return this.kinds.flatMap(kind => this.every(kind))
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

  one (kind) {
    return this.every(kind)[0]
  }

  every (kind) {
    return Object.values(this.data[kind]).map(elem => new Element(elem))
  }

  resolve (elem) {
    // FIXME: Use json-schema validator here instead to support cross-context typing.
    // if (elem instanceof Element) return elem
    if (typeof elem === 'object') return elem
    if (typeof elem === 'string') return this.get(elem)
    if (Array.isArray(elem)) return elem.map(el => this.get(el))
    if (elem == null) return null

    throw TypeError('Failed to resolve element due to unsupported data type')
  }

  // TODO: Rename to `insert`
  register ({ kind, value, props }) {
    if (!kind || typeof kind !== 'string') throw TypeError('kind must be a non-empty string')
    if (value == null) throw TypeError('value must be defined and non-null')

    const elem = elementize(kind, [value, ...props])
    const uid = Element.uid(elem.id)
    const record = this.cast({ ...elem, id: uid, kind })

    this.data[kind] = this.data[kind] || {}
    this.data[kind][uid] = record

    this.source.elements = this.data

    return new Element(record)
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

// TODO: Hoist out to Music, leaky abstraction
export const MUSICAL_ELEMENTS = ['note', 'chord', 'scale', ' penta'] // triad
