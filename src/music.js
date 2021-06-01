import { Note } from './note'
import { Durations } from './durations'
import { Element, Elements, MUSICAL_ELEMENTS } from './elements'
import { Beat } from './beats'
import { compose, notesIn } from './data'

// NOTE: Basically Track v3. Probably just rename to Track eventually.
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

    // console.log('COMPOSED DATA (2)', this.data)
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
      play: (cursor.play || []).map(elem => this.store.resolve(elem)),
      stop: (cursor.stop || []).map(elem => this.store.resolve(elem))
    }
  }

  // add (id, elem) {
  // insert
  // TODO: Probably move to `rebach` package
  add (record) {
    const beat = this.beats.find(beat => beat.id == record.beat)
    const elem = this.store.register(record.elem)

    console.log('adding beat', record, beat, this.beats.map(({ id }) => id))

    this.data
      .beats[beat.id]
      .items[record.item || 0]
      .elements
      .push(elem)

    // const item = this.data.beats[beat].items[record.item || 0]
    // const stop = this.durations.cyclic(beat.index + item.duration)

    // beat
    this.data.steps[beat.index][0].push(elem.id)
    // play
    this.data.steps[beat.index][1].push(elem.id)
    // stop
    this.data.steps[beat.index][2].push(elem.id)

    // TODO: Add to `steps`!

    // return this
    return new Element(elem)
  }

  adjust (tempo) {

  }

}
