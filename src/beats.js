import { Element } from './elements'

/**
 * Represents a single beat in a track.
 *
 * Beats are represented as a tuple and may contain multiple elements
 *
 * duration -> items -> elements
 */
export class Beat {

  constructor (data) {
  // constructor (data, store) {
    this.data = data
    // this.store = store
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
    return this.items.reduce((all, item) => {
      return all.concat(
        item.elements.map(elem => new Element(elem))
      )
    }, [])
    // return new Elements({ source: this.source, store: this.store })
    // return this.store.all
  }

  get kinds () {
    // return [...new Set(this.elements.map(({ kind }) => kind))]
    return this.all(({ kind }) => kind)
  }

  get values () {
    // return [...new Set(this.elements.map(({ value }) => value))]
    return this.all(({ value }) => value)
  }

  // Provides map of elements in a beat grouped by kind.
  get parts () {
    return this.elements.reduce((parts, elem) => {
      return Object.assign(parts, { [elem.kind]: elem })
    }, {})
  }

  get musical () {
    // return this.items.every(item => item.musical)
    return this.elements.every(elem => elem.musical)
  }

  all (cast = _ => _) {
    return [...new Set(this.elements.map(cast))]
  }

  first (kind) {
    // return this.items.find(item => kind == item.kind)
    return this.elements.find(elem => kind == elem.kind)
  }

  static from (beats) {
  // static from (beats, store) {
    if (Array.isArray(beats)) {
      // return beats.map(beat => new Beat(beat, store))
      return beats.map(beat => new Beat(beat))
    }

    // return new Beat(beats, store)
    return new Beat(beats)
  }

}

// TODO: Probably just remove
// export class Beats {

//   constructor (data, store) {
//     this.data = data
//     this.store = store
//   }

//   get all () {
//     return Beat.from(this.data)
//   }

//   get total () {
//     return this.data.length
//   }

// }
