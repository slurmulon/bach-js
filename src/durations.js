import { compose, unitsOf, timesOf } from './data'
import { gcd, clamp, lerp } from './math'
import { Units } from 'segu'

/**
 * Provides essential duration values and calculations of a bach track.
 * Enables trivial conversions between any duration unit via cast (based
 * on milliseconds) and unitize (based on steps, bach's iteration unit).
 */
// export class Durations {
export class Durations extends Units {

  constructor (source, lens) {
    super({ map: null, lens })

    // this.source = compose(source)
    this.source = source
    this.data = compose(source)

    this.init()
  }

  init () {
    // this.units = unitsOf(this.source)
    // this.times = timesOf(this.source)

    // this.map = this.units
    // this.map = unitsOf(this.data)
    // console.log('heh unit map (1)', JSON.stringify(this.map))
    // console.log('heh unit map (wut)', JSON.stringify(Durations.map(this.data)))
    this.map = Durations.map(this.data)
    // this.map = timesOf(this.source)
    // this.times = timesOf(this.source)
    // this.lens = Object.assign({ unit: 'step' }, this.lens)
    // this.lens.unit = 'step'
    // this.lens.assign({ is: 'step', as: 'pulse' })
    // this.lens.assign({ is: 'step', as: 'pulse', max: this.total })
    // this.lens.assign({ is: 'step', as: 'pulse', max: this.total })
    // TODO: Fix segu so we don't have to provide `unit` (defaulting to 1, removing breaks tests)
    this.lens.assign({
      unit: 'step',
      // is: 'step',
      // as: 'pulse',
      max: this.total
    })
  }

  get steps () {
    return this.data.steps
  }

  get metrics () {
    return this.data.metrics
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

  // get step () {
  //   return this.units.step
  // }

  // get pulse () {
  //   return this.units.pulse
  // }

  // get bar () {
  //   return this.units.bar
  // }

  // get interval () {
  //   return this.times.step
  // }

  // cast (duration, { is = 'step', as = 'pulse' } = {}) {
  //   // ORIG
  //   // return duration / (this.times[as] / this.times[is])
  //   return duration / (this.units[as] / this.units[is])
  // }

  // TODO: Rename to time
  // unitize (duration, { is = 'step', as = 'pulse' } = {}) {
  //   // ORIG
  //   // return duration / (this.units[as] / this.units[is])
  //   return duration / (this.times[as] / this.times[is])
  // }

  // spell
  // time
  // clock (duration, { is = 'step', as = 'ms' } = {}) {
  //   return this.times.cast(duration, { is, as })
  // }

  metronize (duration, { is = 'ms', as = 'pulse' } = {}) {
    const index = this.cast(duration, { is, as })
    const bar = this.cast(this.bar, { as })

    return Math.floor(index % bar)
  }

  // TODO: Probably apply offset to index here based on min value, or additional optional base value.
  // scope (duration, { is = 'step', as = 'step', origin = 0, min = 0, max } = {}) {
  //   const index = this.cast(duration - origin, { is, as })
  //   const head = this.cast(min || 0, { is, as })
  //   const total = this.cast(this.total, { is: 'step', as: is })
  //   const tail = this.cast(max || total, { is, as })

  //   return { duration, index, head, tail }
  // }

  // elapsed (duration, scope) {
  //   const { index, head } = this.scope(duration, scope)

  //   return index - head
  // }

  // ratio (duration, scope) {
  //   const { index, tail } = this.scope(duration, scope)

  //   return index / tail
  // }

  // progress (duration, scope) {
  //   const { index, head, tail } = this.scope(duration, scope)
  //   const delta = index - head
  //   const range = tail - head

  //   return delta / range
  // }

  // percentage (duration, scope) {
  //   return this.ratio(duration, scope) * 100
  // }

  // clamp (duration, scope) {
  //   const { index, head, tail } = this.scope(duration, scope)

  //   return clamp(index, head, tail)
  // }

  // cyclic (duration, scope) {
  //   const { index, total, head, tail } = this.scope(duration, scope)
  //   const key = index >= head ? index : index + tail

  //   return key % tail
  // }

  // interpolate (ratio, { is = 'step', min = 0, max } = {}) {
  //   const head = this.cast(min || 0, { is, as: 'step' })
  //   const tail = this.cast(max || this.total, { is, as: 'step' })

  //   return lerp(ratio, head, tail)
  // }

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

  static map (source) {
    const data = compose(source, false)
    const { beat, step, pulse, time, bar } = data.units

    return {
      step: 1,
      pulse: 1 / (beat.step / beat.pulse),
      bar: bar.step,
      ms: 1 / time.step,
      second: (1 / time.step) * 1000,
      's': step,
      'p': pulse,
      'm': bar.step,
      '2n': bar.step / 2,
      '4n': bar.step / 4,
      '8n': bar.step / 8,
      '16n': bar.step / 16,
      '32n': bar.step / 32,
      '64n': bar.step / 64,
      '4up': bar.step - (bar.step / 4),
      '8up': bar.step - (bar.step / 8)
    }
  }

}
