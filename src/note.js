import teoria from 'teoria'

export class Note {

  static hash (note) {
    return Note.parse(note).chroma()
  }

  // static fromElem ({ kind, value }) {
    
  // }

  static parse (value) {
    // return teoria.note.fromMIDI(value)//.scientific()
    // LAST
    // return teoria.note(value)
    if (typeof value === 'string') {
      return teoria.note(value)
    } else if (value instanceof teoria.Note) {
      return value
    }
  }

  // TODO: Consider using chroma instead
  // TODO: Use this in nek, and anywhere else this same logic might be used
  static valueOf (note) {
    // return teoria.note(note).midi() % 12
    // return teoria.note(note).chroma()
    return teoria
      .note(note)
      .scientific()
      // TODO: Centralize! Replace everywhere in bach-sheet, nek, etc.
      .replace(/[0-9]+$/, '')
  }

  static valuesOf (notes) {
    return notes.map(Note.valueOf)
  }

  static generalize (note) {
    return teoria.note(Note.valueOf(note))
  }

  // static unify (notes = []) {
  static reduce (notes = []) {
    // const unique = [...new Set(notes.map(Note.generalize))]
    const unique = [...new Set(Note.valuesOf(notes))]

    return unique.map(value => {
      // return teoria.note.fromMIDI(value).scientific()
      return Note.parse(value).scientific()
    })
  }

  static equals (left, right) {
    return Note.hash(left) == Note.hash(right)
  }

}
