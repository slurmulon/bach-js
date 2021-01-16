import { Note } from './note'
import { validate } from './validate'
import { sectionize, normalize, notesIn, omit } from './util'

export class Sections {

  constructor (source) {
    // TODO: Move to validate module, copied from Track
    if (!validate(source)) {
      throw TypeError(`Invalid Bach.JSON source data: ${JSON.stringify(validate.errors)}`)
    }

    this.source = source
    this.data = sectionize(normalize(source))
  }

  // get data () {
  //   return sectionize(normalize(this.source))
  // }

  get all () {
    return this.data.map(section => this.expand(section))
  }

  get linked () {
    const { data: sections } = this

    return sections.map((section, index) => {
      // TODO: Consider refactoring section to this struct: { duration: 1, parts: { ... } } to avoid use of `omit`
      const { duration } = section
      const base = this.parts(section)
      const key = this.clamp(index)

      return Object.entries(base)
        .reduce((acc, [kind, value]) => {
          const prev = sections[this.clamp(key - 1)]
          const next = sections[this.clamp(key + 1)]

          return Object.assign(acc, this.compare(prev, section, next))
        }, { duration })
    })
  }

  // TODO: Remove this once struct is refactored so all layers are under `parts` instead of on same level as `duration`
  parts (section) {
    return omit(section, ['duration'])
  }

  clamp (index) {
    const { length } = this.data
    const key = index >= 0 ? index : length + index

    return key % length
  }

  expand (section) {
    const { duration } = section
    const parts = this.parts(section)

    return Object.entries(parts)
      .reduce((acc, [kind, value]) => {
        return Object.assign(acc, {
          [kind]: {
            value,
            notes: notesIn(kind, value)
          }
        })
      }, { duration })
  }

  compare (prev, base, next) {
    const { duration } = base
    const root = this.parts(base)

    return Object.entries(root)
      .reduce((acc, [kind, value]) => {
        const notes = {
          root: notesIn(kind, value),
          prev: notesIn(kind, prev[kind]),
          next: notesIn(kind, next[kind])
        }

        const diffs = notes.root.reduce((diffs, note) => {
          return Object.assign(diffs, {
            [note]: {
              prev: notes.prev.some(prev => Note.equals(note, prev)),
              next: notes.next.some(next => Note.equals(note, next))
            }
          })
        }, {})

        return Object.assign(acc, {
          [kind]: {
            // TODO: Remove value and notes after `parse` method
            value,
            notes: notes.root,
            diffs
          }
        })
      }, { duration })
  }
}
