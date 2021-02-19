import { Note } from './note'
import { Durations } from './durations'
import { sectionize, normalize, notesIn, steps } from './data'

export class Sections {

  constructor (source) {
    this.source = normalize(source)
    this.data = sectionize(this.source)
  }

  get all () {
    return this.data.map(section => this.expand(section))
  }

  get length () {
    return this.all.length
  }

  get measures () {
    return this.source.data
  }

  get durations () {
    return new Durations(this.source)
  }

  // TODO: Move most of these into Durations and then just add a utility getter here (or not, can just do sections.duration.total)
  get duration () {
    return this.durations.total
  }

  // TODO: Probably just remove (can do sections.durations.shortest)
  get shortest () {
    return this.durations.shortest
  }

  // TODO: Probably just remove (can do sections.durations.longest)
  get longest () {
    return this.durations.longest
  }

  get musical () {
    return this.data.every(section => {
      return Object.keys(section.parts).some(part => MUSICAL_ELEMENTS.includes(part))
    })
  }

  get notes () {
    return Note.unite(
      this.all.flatMap(section =>
        Object.values(section.parts).flatMap(({ notes }) => notes)
      )
    )
  }

  at (time, is = 'ms') {
    const all = this.durations.steps
    const duration = this.durations.at(time, { is, as: 'pulse' })
    const ratio = this.durations.ratio(duration)

    return steps(ratio, all)
  }

  ratio (duration) {
    return duration / this.duration
  }

  clamp (index) {
    const { length } = this.data
    const key = index >= 0 ? index : length + index

    return key % length
  }

  // compress (section) {
  //   // TODO: Returns original data struct, which is better if you want light-weight data and don't care about the compared/macroscopic view of the sections
  // }

  // TODO: Move to Section class so we dont' have to provide bach data
  expand (section) {
    const parts = Object.entries(section.parts)
      .reduce((acc, [kind, value]) => {
        return typeof value === 'string' ? Object.assign(acc, {
          [kind]: {
            value,
            notes: notesIn(kind, value)
          }
        }) : acc
      }, section.parts)

    return Object.assign(section, { parts })
  }

}

// TODO: Move to elements module
export const MUSICAL_ELEMENTS = ['note', 'chord', 'scale']
