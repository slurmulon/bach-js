import teoria from 'teoria'

/**
 * Represents a single playable element (Note, Scale, Chord, Mode, Triad or Rest)
 */
// FIXME: Support rests (~)
export class Element {

  constructor (data) {
    this.data = data
  }

  get value () {
    return this.inputs[0]
  }

  get inputs () {
    return this.data['arguments']
  }

  get kind () {
    // const explicits = ['Note', 'Scale', 'Chord', 'Mode', 'Triad', 'Pentatonic', 'Penta', 'Rest', '~']
    const keyword = this.data.keyword.toLowerCase()

    // if (semantics.includes(keyword)) {
      // return keyword.toLowerCase()
    // }

    // return this.identify()
    // const kind = this.identify() || keyword
    const kind = keyword

    console.log('[bach-js] kind', this.data, kind)

    return kind
  }

  identify () {
    try {
      teoria.note(this.value)

      return 'note'
    } catch (_) {}

    try {
      const [key, scale] = this.value.split(' ')

      teoria.note(key).scale(scale.toLowerCase())

      return 'scale'
    } catch (_) {}

    // FIXME: Make this support an optional octave (e.g. "Cm" and "C2m")
    try {
      const [key, chord] = [this.value.substring(0,2), this.value.substring(2)]

      teoria.note(key).chord(chord.toLowerCase())

      return 'chord'
    } catch (_) {}
  }

}

/**
 * Represents a single beat in a track.
 *
 * Beats are represented as a duple and may contain multiple elements
 *
 * duration -> notes (elements)
 */
export class Beat {

  constructor (data) {
    this.data = data
  }

  get duration () {
    return this.exists ? this.data.duration : 0
  }

  get items () {
    if (this.empty) return []

    return this.data.items.map(item => new Element(item))
  }

  get empty () {
    return !this.data
  }

  get exists () {
    return !this.empty
  }

  static from (beats) {
    if (Array.isArray(beats)) { // in other words, a measure
      return beats.map(beat => new Beat(beat))
    }

    return new Beat(beats)
  }

}
