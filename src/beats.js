import { Element } from './elements'

/**
 * Represents a single beat in a track.
 *
 * Beats are represented as a tuple and may contain multiple elements
 *
 * duration -> items -> elements
 */
export class Beat {

  // constructor (data) {
  constructor (data, store) {
    this.data = data
    this.store = store
    // TODO: Consider using nanoid to generate pseudo-unique beat identifiers
    // this.id = id || nanoid()
  }

  get index () {
    return this.data.index
  }

  get duration () {
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
    return this.items.flatMap(({ elements }) =>
      elements.map(elem => this.store.resolve(elem))
    )
  }

  get kinds () {
    return this.all(({ kind }) => kind)
  }

  get values () {
    return this.all(({ value }) => value)
  }

  // Provides map of elements in a beat grouped by kind.
  get parts () {
    return this.elements.reduce((parts, elem) => ({
     ...parts,
      [elem.kind]: elem
    }), {})
  }

  get musical () {
    return this.elements.every(elem => elem.musical)
  }

  all (cast = _ => _) {
    return [...new Set(this.elements.map(cast))]
  }

  first (kind) {
    return this.elements.find(elem => kind == elem.kind)
  }

  static from (beats, store) {
    if (Array.isArray(beats)) {
      return beats.map(beat => new Beat(beat, store))
    }

    return new Beat(beats, store)
  }

}
