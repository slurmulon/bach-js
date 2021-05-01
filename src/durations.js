import { normalize, unitsOf, barsOf, timesOf, intervalsOf } from './data'
import { gcd, clamp, lerp } from './math'

export class Durations {

  constructor (source) {
    // this.source = normalize(source)
    this.source = source
  }

  get data () {
    return this.source.data
  }

  // FIXME: Update to look into :items, since we now support different play and stop times
  // get all () {
  //   return this.data.flat().map(beat => beat.duration)
  // }

  get steps () {
    // return this.all.flatMap((duration, index) => Array(duration).fill(index))
    // WARN: Probably need to map duration of each beat instead of just its index
    return this.source.signals
  }

  // get shortest () {
  get min () {
    // return this.all.sort((left, right) => left - right)[0]
    return this.source.metrics.min
  }

  // get longest () {
  get max () {
    // return this.all.sort((left, right) => right- left)[0]
    return this.source.metrics.max
  }

  get total () {
    // return this.source.headers['total-pulse-beats']
    return this.source.metrics.total
  }

  get bar () {
    // return barsOf(this.source)
    return this.unit.bar
  }

  // get units
  get unit () {
    return unitsOf(this.source)
  }

  // get times
  get time () {
    return timesOf(this.source)
  }

  get interval () {
    // return intervalsOf(this.source).pulse
    return this.time.step
  }

  // cast (duration, { is = 'pulse', as = 'ms' } = {}) {
  cast (duration, { is = 'step', as = 'ms' } = {}) {
    return duration / (this.time[as] / this.time[is])
  }

  // unitize (duration, { is = 'pulse', as = 'beat' } = {}) {
  unitize (duration, { is = 'step', as = 'pulse' } = {}) {
    return duration / (this.unit[as] / this.unit[is])
  }

  // metronize (duration, { is = 'pulse', as = 'beat' }) {
  metronize (duration, { is = 'step', as = 'pulse' } = {}) {
    const index = this.cast(duration, { is, as })
    const bar = this.cast(this.bar.step, { as })

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
      .reduce((acc, [key steps]) => {
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
