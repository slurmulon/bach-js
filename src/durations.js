import { compose, unitsOf, timesOf } from './data'
import { gcd, clamp, lerp } from './math'

/**
 * Provides essential duration values and calculations of a bach track.
 * Enables trivial conversions between any duration unit via cast (based
 * on milliseconds) and unitize (based on steps, bach's iteration unit).
 */
export class Durations {

  constructor (source) {
    this.source = compose(source)
    this.init()
  }

  init () {
    this.units = unitsOf(this.source)
    this.times = timesOf(this.source)
  }

  get steps () {
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

  get interval () {
    return this.times.step
  }

  cast (duration, { is = 'step', as = 'pulse' } = {}) {
    return duration / (this.times[as] / this.times[is])
  }

  unitize (duration, { is = 'step', as = 'pulse' } = {}) {
    return duration / (this.units[as] / this.units[is])
  }

  metronize (duration, { is = 'ms', as = 'pulse' } = {}) {
    const index = this.cast(duration, { is, as })
    const bar = this.cast(this.bar, { as })

    return Math.floor(index % bar)
  }

  // TODO: Probably apply offset to index here based on min value, or additional optional base value.
  scope (duration, { is = 'step', as = 'step', origin = 0, min = 0, max } = {}) {
    const index = this.cast(duration - origin, { is, as })
    const head = this.cast(min || 0, { is, as })
    const total = this.cast(this.total, { is: 'step', as: is })
    const tail = this.cast(max || total, { is, as })

    return { duration, index, head, tail }
  }

  // delta (duration, scope) {
  elapsed (duration, scope) {
    const { index, head } = this.scope(duration, scope)

    return index - head
  }

  // TODO: Allow custom min/max here
  // ratio (duration, is = 'step') {
  //   return this.cast(duration, { is, as: 'step' }) / this.total
  // }
  ratio (duration, scope) {
    const { index, tail } = this.scope(duration, scope)

    return index / tail
  }

  // progress (duration, { is = 'step', as = 'step', min = 0, max } = {}) {
  progress (duration, scope) {
    // const index = this.cast(duration, { is, as })
    // const head = this.cast(min || 0, { is, as })
    // const total = this.cast(this.total, { is: 'step', as: is })
    // const tail = this.cast(max || total, { is, as })
    const { index, head, tail } = this.scope(duration, scope)
    const delta = index - head
    const range = tail - head

    return delta / range
  }

  percentage (duration, is = 'step') {
    return this.ratio(duration, is) * 100
  }

  clamp (duration, scope) {
  // clamp (duration, { is = 'step', min = 0, max } = {}) {
    // const step = this.cast(duration, { is, as: 'step' })
    // const head = this.cast(min || 0, { is, as: 'step' })
    // const tail = this.cast(max || this.total, { is, as: 'step' })
    // return clamp(step, head, tail)

    const { index, head, tail } = this.scope(duration, scope)

    return clamp(index, head, tail)
  }

  // cyclic (duration, { is = 'step', min = 0, max } = {}) {
  cyclic (duration, { is = 'step', as = 'step', min = 0, max } = {}) {
    // const step = this.cast(duration, { is, as: 'step' })
    // const head = this.cast(min || 0, { is, as: 'step' })
    // const tail = this.cast(max || this.total, { is, as: 'step' })
    // const key = duration >= head ? duration : duration + tail

    // return key % tail

    const index = this.cast(duration, { is, as })
    const head = this.cast(min || 0, { is, as })
    const total = this.cast(this.total, { is: 'step', as: is })
    const tail = this.cast(max || total, { is, as })
    const key = index >= head ? index : index + tail

    return key % tail
  }

  interpolate (ratio, { is = 'step', min = 0, max } = {}) {
    const head = this.cast(min || 0, { is, as: 'step' })
    const tail = this.cast(max || this.total, { is, as: 'step' })

    return lerp(ratio, head, tail)
  }

  at (duration, is = 'step') {
    const step = Math.floor(this.cast(duration, { is, as: 'step' }))
    const index = this.cyclic(step)
    const state = this.steps[index]
    const [context, play, stop] = state || []

    return {
      beat: context[0],
      elems: context.slice(1),
      play,
      stop,
      index
    }
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
