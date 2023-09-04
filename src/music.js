import { Note } from './note'
import { Durations } from './durations'
import { Element, Elements, MUSICAL_ELEMENTS } from './elements'
import { Beat } from './beats'
import { compile } from './data'
import { notesIn } from './note'

export class Music {

  constructor (source) {
    this.assign(source)
  }

  init () {
    if (!this.parses) return null

    this.store = new Elements({
      source: this.data,
      cast: elem => ({
        ...elem,
        notes: Note.all(elem.kind, elem.value)
      })
    })

    this.beats = Beat.from(this.data.beats, this.store)
    this.durations = new Durations(this.data)
  }

  assign (source) {
    this.source = source
    this.data = compile(source, false)

    this.init()

    return this
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
      elems: this.store.resolve(cursor.elems),
      play: this.store.resolve(cursor.play),
      stop: this.store.resolve(cursor.stop)
    }
  }

  beat (index) {
    const cursor = this.durations.cyclic(index, { max: this.beats.length })

    return this.beats[cursor]
  }

}
