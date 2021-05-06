import { compose, unitsOf, timesOf } from './data'
import { gcd, clamp, lerp } from './math'

export class Durations {

  constructor (source) {
    this.source = compose(source)
  }

  get steps () {
    return this.source.signals
  }

  get metrics () {
    return this.source.metrics
  }

  // TODO: Just conflate the next 3 into `metrics` getter`
  get min () {
    return this.metrics.min
  }

  get max () {
    return this.metrics.max
  }

  get total () {
    return this.metrics.total
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

  time (duration, { is = 'step', as = 'ms' } = {}) {
  // cast (duration, { is = 'step', as = 'ms' } = {}) {
    return duration / (this.times[as] / this.times[is])
  }

  // TODO: Actually, can probably just remove this entirely and just use this.times
  // TODO: Rename to `cast`
  // unitize (duration, { is = 'step', as = 'pulse' } = {}) {
  cast (duration, { is = 'step', as = 'pulse' } = {}) {
    // return duration / (this.units[as] / this.units[is])
    return this.time(duration, { is, as })
  }

  metronize (duration, { is = 'ms', as = 'pulse' } = {}) {
    const index = this.time(duration, { is, as })
    const bar = this.time(this.bar, { as })

    return Math.floor(index % bar)
  }

  ratio (duration, is = 'step') {
    return this.time(duration, { is, as: 'step' }) / this.total
  }

  percentage (duration, is = 'step') {
    return this.ratio(duration, is) * 100
  }

  clamp (duration, { is = 'step', min = 0, max } = {}) {
    const step = this.cast(duration, { is, as: 'step' })
    const head = this.cast(min || 0, { is, as: 'step' })
    const tail = this.cast(max || this.total, { is, as: 'step' })

    return clamp(step, head, tail)
  }

  cyclic (duration, { is = 'step', min = 0, max } = {}) {
    const step = this.cast(duration, { is, as: 'step' })
    const head = this.cast(min || 0, { is, as: 'step' })
    const tail = this.cast(max || this.total, { is, as: 'step' })
    const key = duration >= head ? duration : duration + tail

    return key % tail
  }

  interpolate (ratio, { is = 'step', min = 0, max } = {}) {
    const head = this.cast(min || 0, { is, as: 'step' })
    const tail = this.cast(max || this.total, { is, as: 'step' })

    return lerp(ratio, head, tail)
  }

  at (duration, is = 'step') {
    const step = this.cast(duration, { is, as: 'step' })
    // const step = this.time(duration, { is, as: 'step' })
    const index = this.clamp(step)

    return Object.entries(this.steps)
      .reduce((acc, [key, steps]) => ({
        ...acc,
        [key]: steps[index]
      }), {})
  }

  // TODO: Either replace or improve via inspiration with this:
  // @see: https://tonejs.github.io/docs/r13/Time#quantize
  rhythmic ({
    duration,
    is = 'ms',
    units = ['8n', '4n'],
    calc = 'abs',
    size = 'min'
  } = {}) {
    const durations = units
      .map(unit => {
        const value = this.time(duration, { is, as: unit })
        const result = Math[calc](value)

        return this.time(result, { is: unit, as: is })
      })
      .sort((a, b) => Math.abs(duration - a) - Math.abs(duration - b))

    return Math[size](...durations)
  }

}
