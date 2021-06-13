import { Note } from './note'
import { Durations } from './durations'
import { Element, Elements, MUSICAL_ELEMENTS } from './elements'
import { Beat } from './beats'
import { compose, notesIn } from './data'

export class Music {

  constructor (source) {
    this.source = source
    this.data = compose(source)
    this.store = this.parses ? new Elements({
      source: this.data,
      cast: elem => ({
        ...elem,
        notes: Note.all(elem.kind, elem.value)
      })
    }) : null
  }

  get headers () {
    return this.data.headers
  }

  get metrics () {
    return this.data.metrics
  }

  get units () {
    return this.data.units
  }

  get meter () {
    return this.headers.meter
  }

  get tempo () {
    return this.headers.tempo
  }

  get elements () {
    return this.store.all
  }

  get beats () {
    return Beat.from(this.data.beats, this.store)
  }

  get durations () {
    return new Durations(this.data)
  }

  get notes () {
    return Note.unite(
      this.beats.flatMap(beat =>
        beat.elements.flatMap(({ notes }) => notes)
      )
    )
  }

  get musical () {
    return this.beats.every(beat => beat.musical)
  }

  // get playable () {
  //   return this.elements.every(({ notes }) => !!notes.length)
  // }

  get step () {
    return this.units.beat.step
  }

  get interval () {
    return this.units.time.step
  }

  get parses () {
    return !this.data.fail
  }

  at (duration, is = 'step') {
    const cursor = this.durations.at(duration, is)

    return {
      beat: this.beats[cursor.beat],
      elems: (cursor.elems || []).map(elem => this.store.resolve(elem)),
      play: (cursor.play || []).map(elem => this.store.resolve(elem)),
      stop: (cursor.stop || []).map(elem => this.store.resolve(elem))
    }
  }

  beat (index) {
    const cursor = this.durations.cyclic(index, { max: this.beats.length })

    return this.beats[cursor]
  }

  adjust (tempo) {

  }

}
