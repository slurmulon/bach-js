import { Note } from './note'
import { validate } from './validate'
import { sectionize, sectionize2, normalize, notesIn, omit } from './data'

export class Sections {

  constructor (source) {
    // TODO: Move to validate module, copied from Track
    if (!validate(source)) {
      throw TypeError(`Invalid Bach.JSON source data: ${JSON.stringify(validate.errors)}`)
    }

    this.source = normalize(source)
    // this.data = sectionize(this.source)
    this.data = sectionize2(this.source)
  }

  // get data () {
  //   return sectionize(normalize(this.source))
  // }

  get all () {
    return this.data.map(section => this.expand(section))
  }

  // get linked () {
  get compared () {
    const { data: sections } = this

    return sections.map((section, index) => {
      const prev = sections[this.clamp(index - 1)]
      const next = sections[this.clamp(index + 1)]

      return this.compare(prev, section, next)
    })
  }

  // TODO: Remove this once struct is refactored so all layers are under `parts` instead of on same level as `duration`
  parts (section) {
    // return omit(section, ['duration'])
    return section.parts
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

  compare (prev, base, next) {
    const { duration } = base
    const section = this.expand(base)

    const parts = Object.entries(section.parts)
      .reduce((acc, [kind, part]) => {
        const notes = {
          prev: notesIn(kind, prev[kind]),
          next: notesIn(kind, next[kind])
        }

        const diffs = part.notes.reduce((diffs, note) =>
          Object.assign(diffs, {
            [note]: {
              prev: notes.prev.some(prev => Note.equals(note, prev)),
              next: notes.next.some(next => Note.equals(note, next))
            }
          }), {})

        acc[kind].diffs = diffs

        return acc
      }, section.parts)

    return Object.assign(section, { parts })
  }
}
