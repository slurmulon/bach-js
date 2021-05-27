import { compose, unitsOf, timesOf } from './data'
import { gcd, clamp, lerp } from './math'

export class Durations {

  constructor (source) {
    this.source = compose(source)
  }

  get steps () {
    // return this.source.signals
    return this.source.steps
  }

  get metrics () {
    return this.source.metrics
  }

  get min () {
    return this.metrics.min
  }

  get max () {
    return this.metrics.max
  }

  get total () {
    return this.metrics.total
  }

  get step () {
    return this.units.step
  }

  get pulse () {
    return this.units.pulse
  }

  get bar () {
    return this.units.bar
  }

  get units () {
    // TODO: Remove, just return this.units
    return unitsOf(this.source)
  }

  get times () {
    return timesOf(this.source)
  }

  get interval () {
    return this.times.step
  }

  cast (duration, { is = 'step', as = 'pulse' } = {}) {
    return duration / (this.times[as] / this.times[is])
  }

  metronize (duration, { is = 'ms', as = 'pulse' } = {}) {
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
    const index = this.cyclic(step)
    const state = this.steps[index]
    console.log('bach state', state, index)
    const [[beat, ...elem], play, stop] = state

    return {
      beat,
      // TODO: Add once tests are updated
      // elem,
      play,
      stop,
      index
    }

    // return Object.entries(this.steps)
    //   .reduce((acc, [key, steps]) => ({
    //     ...acc,
    //     [key]: steps[index]
    //   }), { index })
  }

  // TODO: Either replace or improve via inspiration with this:
  // @see: https://tonejs.github.io/docs/r13/Time#quantize
  rhythmic (duration, {
    is = 'ms',
    units = ['8n', '4n'],
    calc = 'floor',
    size = 'min'
  } = {}) {
    const durations = units
      .map(unit => {
        const value = this.cast(duration, { is, as: unit })
        const result = Math[calc](value)

        return this.cast(result, { is: unit, as: is })
      })
      .sort((a, b) => Math.abs(duration - a) - Math.abs(duration - b))

    return Math[size](...durations)
  }

}
