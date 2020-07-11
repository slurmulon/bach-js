import { Beat } from './elements'
import { validate } from './validate'

// TODO: Possibly rename to Bach, Track will just be a Gig construct
export class Track {

  // TODO:
  // constructor ({ source, tempo })
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
        .filter(beat => {
          if (beat.data) {
            return beat.items.some(item => {
              return item && item.kind === kind
            })
          }
        })
    }).flat()
  }

  /**
   * Determines how long to wait between each interval based on the track and user tempo
   *
   * @returns {number}
   */
  get interval () {
    const header = this.headers.tempo
    const tempos = {
      init: header,
      user: this.tempo || header
    }

    const diff = tempos.user / tempos.init

    return this.headers['ms-per-beat'] / diff
  }

  // TODO: get mspb (ms-per-meter-beat essentially, since our `ms-per-beat` in bach is really, in practice, `ms-per-lowest-beat` (need to correct for this in `bach!)
  // TODO: consider moving `interval` (and this new getter) to a `time` module or something

  /**
   * Determines the measure and beat found at the provided indices
   *
   * @param {number} measureIndex
   * @param {number} beatIndex
   * @returns {Object}
   */
  at (measureIndex, beatIndex) {
    try {
      const measure = this.data[measureIndex]
      const beat = measure[beatIndex]

      return { measure, beat }
    } catch (e) {
      return null
    }
  }

}
