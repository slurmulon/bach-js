import { compose } from './data'
// import { gcd, clamp, lerp } from './math'
// import { Units } from 'segu'
import { Units, gcd, clamp, lerp } from 'segu'

/**
 * Provides essential duration values and calculations of a bach track.
 * Enables trivial conversions between any duration unit via cast (based
 * on milliseconds) and unitize (based on steps, bach's iteration unit).
 */
export class Durations extends Units {

  constructor (source, lens) {
    super({ map: null, lens })

    this.source = source
    this.data = compose(source)

    this.init()
  }

  init () {
    this.map = Durations.map(this.data)

    this.lens.assign({ unit: 'step', max: this.total })
  }

  get units () {
    return this.data.units
  }

  get steps () {
    return this.data.steps
  }

  get bar () {
    return this.units.bar
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

  metronize (duration, { is = 'ms', as = 'pulse' } = {}) {
    const index = this.cast(duration, { is, as })
    const bar = this.cast(this.bar.step, { as })

    return Math.floor(index % bar)
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
      '8up': bar.step - (bar.step / 8),
      '16up': bar.step - (bar.step / 16),
      '32up': bar.step - (bar.step / 32),
      '64up': bar.step - (bar.step / 64)
    }
  }

}
