import { normalize, unitsOf, barsOf } from 'bach-js'

export class Durations {

  constructor (source) {
    this.source = normalize(source)
  }

  // get total
  // get slowest
  // get fastest

  get unit () {
    return unitsOf(this.source)
  }

  get bar () {
    return barsOf(this.source)
  }

  cast (duration, { is = 'pulse', as = 'beat' } = {}) {
    return duration / (this.unit[as] / this.unit[is])
  }

  // rhythmic

}
