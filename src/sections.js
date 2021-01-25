import { Note } from './note'
import { validate } from './validate'
import { sectionize, normalize, notesIn } from './data'

export class Sections {

  constructor (source) {
    // TODO: Move to validate module, copied from Track
    if (!validate(source)) {
      throw TypeError(`Invalid Bach.JSON source data: ${JSON.stringify(validate.errors)}`)
    }

    this.source = normalize(source)
    this.data = sectionize(this.source)
  }

  get all () {
    return this.data.map(section => this.expand(section))
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
