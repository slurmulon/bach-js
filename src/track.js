import { Beat } from './elements'
import { Durations } from './durations'
import { compose } from './data'

// TODO: Possibly rename to Bach, Track will just be a Gig construct
// TODO: Consider adding `sections` getter here to better centralize logic
//  - Or, instead, create a mixin between Sections and Track called Bach, containing shared logic like headers, tempo, durations, etc.
export class Track {

  // TODO:
  // constructor ({ source, tempo })
  constructor (source) {
    this.origin = source
    this.source = compose(source)
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
   * Provide the tempo header of the track, fundamental in all time/duration calcs
   *
   * @returns {Number}
   */
  get tempo () {
    return this.headers.tempo
  }

  /**
   * Provide the meter header of the track, fundamental in all time/duration calcs
   *
   * @returns {Number}
   */
  get meter () {
    return this.headers.meter
  }

  /**
   * Finds all Beat elements matching a kind
   *
   * @returns {Array<Object>}
   */
  all (kind = 'note') {
    return this.data.map(beats =>
      beats.filter(beat => {
        if (beat.data) {
          return beat.items.some(item =>
            item && item.kind === kind
          )
        }
      })
    ).flat()
  }

  /**
   * Determines how long to wait between each interval (pulse beat) based on the track and user tempo
   *
   * @returns {number}
   */
  // FIXME: Need to add `tempo` as a constructor param in order for this to work
  //  - Before we do that, we need to figure out how to react to tempo and re-calc all durations via `bach`
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

  get durations () {
    return new Durations(this.source)
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
