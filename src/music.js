import { Note } from './note'
import { Durations } from './durations'
import { Elements, MUSICAL_ELEMENTS } from './elements'
import { Beat } from './beats'
import { compose, notesIn } from './data'

// NOTE: Basically Track v3. Probably just rename to Track eventually.
export class Music {

  constructor (source) {
    this.source = source
    this.data = compose(source)
    this.store = new Elements({
      source: this.data,
      cast: elem => ({
        ...elem,
        notes: notesIn(elem.kind, elem.value)
      })
    })
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

  // get interval
  get step () {
    return this.data.units.beat.step
  }

  at (duration, is = 'step') {
    const cursor = this.durations.at(duration, is)

    // NOTE: Could instead pre-emptively expand serialized format from compose (or just, in bach.core, separate into both a serialized composition and a reoslved/expanded composition!
    return {
      beat: this.beats[cursor.beat],
      play: (cursor.play || []).map(elem => this.store.resolve(elem)),
      stop: (cursor.stop || []).map(elem => this.store.resolve(elem))
    }
  }

}
