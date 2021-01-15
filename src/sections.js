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
  }

  get all () {
    return sectionize(normalize(this.source))
  }

  get linked () {
  // get traversed () {
    const { all: sections } = this

    console.log('linked sections', sections)

    return sections.map((section, index) => {
      // TODO: Consider refactoring section to this struct: { duration: 1, parts: { ... } } to avoid use of `omit`
      // const parts
      const { duration } = section
      const base = omit(section, ['duration'])
      const key = this.clamp(index)

      return Object.entries(base)
        .reduce((acc, [kind, value]) => {
          const prev = sections[this.clamp(key - 1)]
          const next = sections[this.clamp(key + 1)]

          // return Object.assign(acc, compareSections(prev, section, next))
          return Object.assign(acc, this.compare(prev, section, next))
        }, { duration })
    })

  }

  clamp (index) {
    const { length } = this.all
    const key = index >= 0 ? index : length + index

    return key % length
  }

  compare (prev, base, next) {
    return Sections.compare(prev, base, next)
  }

  static compare (prev, base, next) {
    const { duration } = base
    const root = omit(base, ['duration'])

    return Object.entries(root)
      .reduce((acc, [kind, value]) => {
        console.log('---- link compare value', kind, value)
        const notes = {
          root: notesIn(kind, value),
          prev: notesIn(kind, prev[kind]),
          next: notesIn(kind, next[kind])
        }

        const delta = notes.root.reduce((diffs, note) => {
          return Object.assign(diffs, {
            [note]: {
              prev: notes.prev.some(prev => Note.equals(note, prev)),
              next: notes.next.some(next => Note.equals(note, next))
            }
          })
        }, {})

        return Object.assign(acc, {
          [kind]: {
            value,
            delta,
            notes: notes.root
          }
        })
      // }, base)
      }, { duration })
  }

}
