import { Note } from './note'
import { validate } from './validate'
import { sectionize, sectionize2, normalize, notesIn, omit } from './util'

// TODO: Generally refactor section to this struct: { duration: 1, parts: { ... } } to avoid use of `omit` around `duration`
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

  // WARN: Currently unused. Most methods use `section` in compressed data structure right now, which seems to be working well enough.
  get all () {
    return this.data.map(section => this.expand(section))
  }

  get linked () {
    const { data: sections } = this

    return sections.map((section, index) => {
      const { duration } = section
      const base = this.parts(section)
      const key = this.clamp(index)

      const prev = sections[this.clamp(key - 1)]
      const next = sections[this.clamp(key + 1)]

      return this.compare(prev, section, next)

      // return Object.entries(base)
      // const parts = Object.entries(section.parts)
      //   .reduce((acc, [kind, value]) => {
      //     const prev = sections[this.clamp(key - 1)]
      //     const next = sections[this.clamp(key + 1)]

      //     return Object.assign(acc, this.compare(prev, section, next))
      //   }, section.parts)

      // return Object.assign(section, { parts })
        // }, { duration })
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

  expand (section) {
    // const { duration } = section
    // const parts = this.parts(section)
    console.log('\n\n\n^^^^^^^ expanding section', section)

    // return Object.entries(parts)
    const parts = Object.entries(section.parts)
      // .reduce((acc, [kind, value]) => {
      .reduce((acc, [kind, value]) => {
        return typeof value === 'string' ? Object.assign(acc, {
          [kind]: {
            value,
            notes: notesIn(kind, value)
          }
        }) : acc
      // }, { duration })
      }, section.parts)


    return Object.assign(section, { parts })
  }

  compare (prev, base, next) {
    const { duration } = base
    // const parts = this.parts(this.expand(base))
    const section = this.expand(base)

    console.log('COMPARING section', section)

    // return Object.entries(parts)
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
      // }, Object.assign({ duration }, parts))
      }, section.parts)

    return Object.assign(section, { parts })
  }
}
