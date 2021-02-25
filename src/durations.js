import { normalize, unitsOf, barsOf, timesOf, intervalsOf } from './data'
import { gcd, clamp, lerp } from './math'

export class Durations {

  constructor (source) {
    this.source = normalize(source)
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

  get shortest () {
    return this.all.sort((left, right) => left - right)[0]
  }

  get longest () {
    return this.all.sort((left, right) => right- left)[0]
  }

  get total () {
    return this.source.headers['total-pulse-beats']
  }

  get bar () {
    return barsOf(this.source)
  }

  get unit () {
    return unitsOf(this.source)
  }

  get time () {
    return timesOf(this.source)
  }

  get interval () {
    return intervalsOf(this.source).pulse
  }

  cast (duration, { is = 'pulse', as = 'ms' } = {}) {
    return duration / (this.time[as] / this.time[is])
  }

  unitize (duration, { is = 'pulse', as = 'beat' } = {}) {
    return duration / (this.unit[as] / this.unit[is])
  }

  metronize (duration, { is = 'pulse', as = 'beat' }) {
    const index = this.cast(duration, { is, as })
    const bar = this.cast(this.bar.pulse, { as })

    return Math.floor(index % bar)
  }

  ratio (duration, is = 'pulse') {
    return this.cast(duration, { is, as: 'pulse' }) / this.total
  }

  percentage (duration, is = 'pulse') {
    return this.ratio(duration, is) * 100
  }

  clamp (duration, { is = 'pulse', min = 0, max } = {}) {
    const total = this.cast(duration, { is, as: 'pulse' })

    return clamp(duration, min, max || total)
  }

  interpolate (ratio, { is = 'pulse', min = 0, max } = {}) {
    const x = this.cast(min || 0, { is, as: 'pulse' })
    const y = this.cast(max || duration, { is, as: 'pulse' })

    return lerp(ratio, x, y)
  }

  // TODO: Either replace or improve via inspiration with this:
  // @see: https://tonejs.github.io/docs/r13/Time#quantize
  rhythmic ({
    duration,
    is = 'ms',
    units = ['eight', 'quarter'],
    calc = 'abs',
    size = 'min'
  }) {
    const durations = units
      .map(unit => Math[calc](this.cast(duration, { is, as: unit })))
      .sort((a, b) => Math.abs(time - a) - Math.abs(time - b))
      .filter(_ => _)

    return Math[size](...durations)
  }

}
