import { Beat } from './elements'
import { valid } from './validate'

// TODO: Possibly rename to Bach, Track will just be a Gig construct
export class Track {

  // TODO:
  // constructor ({ source, tempo })
  constructor (source) {
    this.source = valid(source)
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
   * Determines how long to wait between each interval (pulse beat) based on the track and user tempo
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

    return this.headers['ms-per-pulse-beat'] / diff
  }


  // TODO: Take `barOf` approach in client playing mixin instead (providing both pulse and beat units here)
  /**
   * Specifies the total number of pulse beats (i.e. "pulses") in a measure
   *
   * @returns {number}
   */
  get pulses () {
    return this.headers['pulse-beats-per-measure']
  }

  /**
   * Determines the total number of measures and beats in the track.
   *
   * @returns {Object}
   */
  get total () {
    const measures = this.data.length
    const beats = this.data.reduce((acc, measure) => acc + measure.length, 0)

    return { measures, beats }
  }

  /**
   * Determines the measure and beat found at the provided indices in a safe manner (modulates indices)
   *
   * @param {number} measure
   * @param {number} beat
   * @returns {Object}
   */
  at (measureIndex, beatIndex) {
    try {
      const measure = this.data[Math.floor(measureIndex) % this.total.measures]
      const beat = measure[Math.floor(beatIndex) % measure.length]

      return { measure, beat }
    } catch (e) {
      return null
    }
  }

}
