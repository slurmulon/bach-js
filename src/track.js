import { Beat } from './elements'
import { validate } from './validate'

export class Track {

  constructor (source) {
    if (!validate(source)) {
      throw TypeError(`Invalid Bach.JSON source data: ${JSON.stringify(validate.errors)}`)
    }

    this.source = source
  }

  /**
   * Parses and returns the source track data as Beat elements
   *
   * @returns {Array<Object>}
   */
  get data () {
    return this.source.data.map(Beat.from)
  }

  /**
   * Provides the source header data of the track
   *
   * @returns {Object}
   */
  get headers () {
    return this.source.headers
  }

  /**
   * Finds all Beat elements matching a kind
   *
   * @returns {Array<Object>}
   */
  all (kind = 'note') {
    return this.data.map(beats => {
      return beats
        .filter(beat => !!beat.data)
        .map(({ items }) => {
          return items.filter(item => item && item.kind === kind)
        })
        .flat()
    }).flat()
  }

}
