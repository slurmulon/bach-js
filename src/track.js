import { Beat, Element } from './elements'
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
    //
    this.data = this.normalize(source)
    //
  }

  /**
   * Parses composes bach.json into local classes.
   *
   * @returns {Object}
   */
  normalize (source) {
    const { beats, elements } = this
    // signals

    return Object.assign(source, { beats, elements })
  }
  //
  // get beats
  //
  // resolve (elem) {
  //   return this.elements
  // }

  /**
   * Parses and returns the source track's beats.
   *
   * @returns {Array<Object>}
   */
  // get data () {
    // return this.source.data.map(Beat.from)
  get beats () {
    // TODO: Resolve all item elements
    //  - Or pass a `store` object into Beat.from which is just the elements index, so we can properly encapsulate this resolution logic
    return this.data.beats.map(beat => Beat.from(beat, this.elements))
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
   * @returns {Array}
   */
  get meter () {
    return this.headers.meter
  }

  // get iterations
  // get headers
  // get units
  // get metrics
  get elements () {
    // return this.source.elements
    const elems = Object.entires(this.source.elements)

    return elems.reduce((acc, [kind ids]) =>
      Object.entries(ids)
        .reduce(([[id, elem]) =>
          Object.assign(acc, {
            [id]: Object.assign(elem, { id, kind })
          })
      , {})
    , {})

    // return Object.entries(this.source.elements)
    //   .map(([uid, elem]) => this.resolve(`${kind}.${uid}`))
    //   .map(([id, elem]) => ({ id, kind, ...elem }))
  }

  // get signals () {
  //   return this.source.signals
  // }

  get metrics () {
    return this.source.metrics
  }

  get units () {
    return this.source.units
  }

  /**
   * Finds all Beat elements matching a kind
   *
   * @returns {Array<Object>}
   */
  all (kind) {
    // const elems = this.elements[kind] || []

    // return Object.entries(elems)
    //   // .map(([uid, elem]) => this.resolve(`${kind}.${uid}`))
    //   // TODO: Move this into `this.elements` or change the format in `bach.core` to include `uid` and `kind` on each element (intentional redundancy for easier parsing).
    //   .map(([id, elem]) => ({ id, kind, ...elem }))

    // return this.data.map(beats =>
    //   beats.filter(beat => {
    //     if (beat.data) {
    //       return beat.items.some(item =>
    //         item && item.kind === kind
    //       )
    //     }
    //   })
    // ).flat()
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

    // return this.headers['ms-per-pulse-beat'] / diff
    return this.units.time.step / diff
  }


  // TODO: Remove, can just use `units.bar.step`
  // TODO: Take `barOf` approach in client playing mixin instead (providing both pulse and beat units here)
  /**
   * Specifies the total number of step beats (i.e. "steps") in a bar.
   *
   * @returns {number}
   */
  // get pulses () {
  get steps () {
    // return this.headers['pulse-beats-per-measure']
    return this.units.bar.step
  }

  /**
   * Determines the total number of step beats and bars in the track.
   *
   * @returns {Object}
   */
  get total () {
    const beats = this.metrics.total
    const bars = beats / this.units.bar.step

    return { beats, bars }

    // const measures = this.data.length
    // const beats = this.data.reduce((acc, measure) => acc + measure.length, 0)

    // return { measures, beats }
  }

  /**
   * Provides a usable duration-specific API that can convert between units and more.
   *
   * @returns {Durations}
   */
  get durations () {
    return new Durations(this.source)
  }

  // resolve (id)
  // MOVING TO Elements
  element (id) {
    const [kind, uid] = id.split('.')
    const elem = this.elements[kind][uid]

    return Object.assign({}, elem, { id: uid, kind })
  }

//   at (duration, { is = 'step', sig = 'beat' } = {}) {
//     const index = this.durations.cast(duration, { is, as: 'step' })
//     const signal = this.signals[sig] || []

//     return signal[index]
//   }

  at (duration, is = 'step') {
    const cursor = this.durations.at(duration, is)

    // NOTE: Could instead pre-emptively expand serialized format from compose (or just, in bach.core, separate into both a serialized composition and a reoslved/expanded composition!
    return {
      beat: this.beats[cursor.beat],
      play: (cursor.play || []).map(this.element),
      stop: (cursor.stop || []).map(this.element)
    }
  }


  // REMOVE!
  /**
   * Determines the measure and beat found at the provided indices in a safe manner (modulates indices)
   *
   * @param {number} measure
   * @param {number} beat
   * @returns {Object}
   */
  // at (measureIndex, beatIndex) {
  //   try {
  //     const measure = this.data[Math.floor(measureIndex) % this.total.measures]
  //     const beat = measure[Math.floor(beatIndex) % measure.length]

  //     return { measure, beat }
  //   } catch (e) {
  //     return null
  //   }
  // }

}

// export const SIGNAL_TYPES = { beat: 'beat', play: 'element', stop: 'element' })
