import { compose, unitsOf, timesOf } from './data'
import { gcd, clamp, lerp } from './math'

export class Durations {

  constructor (source) {
    // this.source = normalize(source)
    // this.source = source
    this.source = compose(source)
  }

  // get data () {
  //   return this.source.data
  // }

  // FIXME: Update to look into :items, since we now support different play and stop times
  // get all () {
  //   return this.data.flat().map(beat => beat.duration)
  // }

  get steps () {
    // return this.all.flatMap((duration, index) => Array(duration).fill(index))
    // WARN: Probably need to map duration of each beat instead of just its index
    return this.source.signals
  }

  // TODO: Just conflate the next 3 into `metrics` getter`
  get min () {
    return this.source.metrics.min
  }

  get max () {
    return this.source.metrics.max
  }

  get total () {
    return this.source.metrics.total
  }

  get bar () {
    return this.units.bar
  }

  get units () {
    return unitsOf(this.source)
  }

  get times () {
    return timesOf(this.source)
  }

  get interval () {
    return this.times.step
  }

  // TODO: Rename to `time`
  // cast (duration, { is = 'step', as = 'ms' } = {}) {
  time (duration, { is = 'step', as = 'ms' } = {}) {
    return duration / (this.times[as] / this.times[is])
  }

  // TODO: Rename to `cast`
  // unitize (duration, { is = 'step', as = 'pulse' } = {}) {
  cast (duration, { is = 'step', as = 'pulse' } = {}) {
    return duration / (this.units[as] / this.units[is])
  }

  metronize (duration, { is = 'step', as = 'pulse' } = {}) {
    const index = this.cast(duration, { is, as })
    const bar = this.cast(this.bar, { as })

    return Math.floor(index % bar)
  }

  ratio (duration, is = 'step') {
    return this.cast(duration, { is, as: 'step' }) / this.total
  }

  percentage (duration, is = 'step') {
    return this.ratio(duration, is) * 100
  }

  clamp (duration, { is = 'step', min = 0, max } = {}) {
    const total = this.cast(duration, { is, as: 'step' })

    return clamp(duration, min, max || total)
  }

  interpolate (ratio, { is = 'step', min = 0, max } = {}) {
    const x = this.cast(min || 0, { is, as: 'step' })
    const y = this.cast(max || duration, { is, as: 'step' })

    return lerp(ratio, x, y)
  }

  at (duration, is = 'step') {
    const step = this.cast(duration, { is, as: 'step' })
    const index = this.clamp(step, 0, this.total)

    return Object.entries(this.steps)
      .reduce((acc, [key, steps]) => {
        return Object.assign(acc, { [key]: steps[index] })
      }, {})
  }

  // TODO: Either replace or improve via inspiration with this:
  // @see: https://tonejs.github.io/docs/r13/Time#quantize
  rhythmic ({
    duration,
    is = 'ms',
    units = ['8n', '4n'],
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
