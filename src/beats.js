import { Element } from './elements'
// import { Note } from './note'
import Notes from './notes'

/**
 * Represents a single beat in a track.
 *
 * Beats are represented as a tuple and may contain multiple elements
 *
 * duration -> items -> elements
 */
export class Beat {

  constructor (data, store) {
    this.data = data
    this.store = store
  }

  get id () {
    return this.data.id
  }

  get index () {
    return this.data.index
  }

  get duration () {
    return this.data.duration
  }

  get items () {
    return this.data.items.map(item => ({
      ...item,
      elements: item.elements.map(elem => this.store.resolve(elem))
    }))
  }

  get elements () {
    return this.data.items.flatMap(({ elements }) =>
      elements.map(elem => this.store.resolve(elem))
    )
  }

  get kinds () {
    return this.all(({ kind }) => kind)
  }

  get values () {
    return this.all(({ value }) => value)
  }

  get notes () {
    return this.notesOf(this.elements)
  }

  // Provides map of elements in a beat grouped by kind.
  // WARN: Doesn't support multiple elements of the same kind.
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

  find (kind) {
    return this.elements.find(elem => kind === elem.kind)
  }

  filter (kind) {
    return this.elements.filter(elem => kind === elem.kind)
  }

  last (kind) {
    return this.filter(kind).reverse()[0]
  }

  either (kinds) {
    return kinds.reduce((acc, kind) => acc.length ? acc : this.filter(kind), [])
  }

  notesOf (elements) {
    // return Note.unite(elements.flatMap(({ notes }) => notes))
    return Notes.unique(elements.flatMap(({ notes }) => notes))
  }

  static from (beats, store) {
    if (Array.isArray(beats)) {
      return beats.map(beat => new Beat(beat, store))
    }

    return [new Beat(beats, store)]
  }

}
