import { Note } from './note'
import { Durations } from './durations'
import { Elements, MUSICAL_ELEMENTS } from './elements'

export default class Music {

  constructor (source) {
    this.source = source
    this.data = compose(source)
  }

  get beats () {
    return this.data.beats.map(beat => this.expand(beat))
  }

  get elements () {
    return Elements.cast(elem => ({
      ...elem,
      notes: notesIn(elem.kind, elem.value)
    })
  }

  get notes () {
    return Note.unite(
      this.beats.flatMap(beat =>
        beat.elements.flatMap(({ notes }) => notes)
      )
    )
  }

  get musical () {
    return this.beats.every(beat => {
      // return Object.keys(section.parts).some(part => MUSICAL_ELEMENTS.includes(part))
      // return beat.kinds.some(kind => MUSICAL_ELEMENTS.includes(kind))
      return beat.musical
    })
  }


  // Adds notes to each element
  // parse () {
  normalize () {
    const { elements, beats } = this

    return Object.assign(this.data, { elements, beats })
  }

  expand (beat) {
    // TODO (instead) just resolve and replace beats after `normalize` has been called
    const { items } = Beat.from(beat, this.elements)
    // const parts = Object.entries(section.parts)
    // const parts = beat.items
      // .reduce((acc, [kind, value]) => {
      //   return typeof value === 'string' ? Object.assign(acc, {
      //     [kind]: {
      //       value,
      //       notes: notesIn(kind, value)
      //     }
      //   }) : acc
      // }, section.parts)

    return Object.assign(section, { parts })
  }



}
