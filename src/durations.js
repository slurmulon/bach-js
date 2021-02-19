import { normalize, unitsOf, barsOf, timesOf } from './data'

export class Durations {

  constructor (source) {
    this.source = normalize(source)
    // this.unit = 'pulse'
  }

  // get total
  // get slowest
  // get fastest

  get data () {
    return this.source.data
  }

  get all () {
    return this.data.flat().map(beat => beat.duration)
  }

  get total () {
    return this.all.reduce((total, duration) => total + duration, 0)
  }

  get shortest () {
    return this.all.sort((left, right) => left - right)[0]
  }

  get longest () {
    return this.all.sort((left, right) => right- left)[0]
  }

  get unit () {
    return unitsOf(this.source)
  }

  get bar () {
    return barsOf(this.source)
  }

  get time () {
    return timesOf(this.source)
  }

  get interval () {
    return this.headers['ms-per-pulse-beat']
  }

  cast (duration, { is = 'pulse', as = 'beat' } = {}) {
    return duration / (this.unit[as] / this.unit[is])
  }

  // TODO: Could/should avoid the need for this and just conflate into `cast`
  at (time, { is = 'ms', as = 'beat' } = {}) {
    // const seconds = this.seconds(time)
    // return time * this.time[is]
    return time / (this.time[as] / this.time[is])
  }

  // seconds () {
  //   const bar = (this.barOf.pulse * interval) / 1000
  //   // const bar = (this.barOf.pulse * interval)

  //   return {
  //     bar,
  //     measure: bar,
  //     half: bar / 2,
  //     quarter: bar / 4,
  //     eight: bar / 8,
  //     sixteen: bar / 16,
  //     upbeat: bar - (bar / 4),
  //     upeight: bar - (bar / 8)
  //   }
  // }

  // map
  // invert
  // position (duration, { is = 'pulse', as = 'beat' } = {}) {
  //   const beats = this.cast({ is, as: 'beat' })
  //   const bar = this.bar.beat

  //   return {
  //     beat: 
  //   }
  // }

  // rhythmic

}
