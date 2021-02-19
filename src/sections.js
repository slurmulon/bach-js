import { Note } from './note'
import { sectionize, normalize, notesIn } from './data'

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

  // TODO: Move most of these into Durations and then just add a utility getter here (or not, can just do sections.duration.total)
  get duration () {
    return this.all.reduce((total, { duration }) => total + duration, 0)
  }

  get shortest () {
    return this.all.sort((left, right) => left.duration - right.duration)[0]
  }

  get longest () {
    return this.all.sort((left, right) => right.duration - left.duration)[0]
  }

  get musical () {
    return this.data.every(section => {
      return Object.keys(section.parts).some(part => MUSICAL_ELEMENTS.includes(part))
    })
  }

  get notes () {
    return Note.unite(
      this.all
        .flat()
        .map(({ notes }) => notes)
    )
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

export const MUSICAL_ELEMENTS = ['note', 'chord', 'scale']
