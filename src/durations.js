import { normalize, unitsOf, barsOf, timesOf } from './data'

export class Durations {

  constructor (source) {
    this.source = normalize(source)
    // this.unit = 'pulse'
  }

  get data () {
    return this.source.data
  }

  get all () {
    return this.data.flat().map(beat => beat.duration)
  }

  get steps () {
    return this.all.flatMap((duration, index) => Array(duration).fill(index))
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

  cast (duration, { is = 'pulse', as = 'ms' } = {}) {
    return duration / (this.time[as] / this.time[is])
  }

  ratio (duration, is = 'pulse') {
    return this.cast(duration, { is, as: 'pulse' }) / this.total
  }

  percentage (duration, is = 'pulse') {
    return this.ratio(duration, is) * 100
  }

  rhythmic ({
    time,
    is = 'ms',
    units = ['eight', 'quarter'],
    calc = 'abs',
    size = 'min'
  }) {
    const durations = units.map(unit => {
      const duration = this.at(time, { is, as: unit })

      return Math[calc](duration)
    })
    .sort((a, b) => Math.abs(time - a) - Math.abs(time - b))
    .filter(_ => _)

    return Math[size](...durations)
  }

}
