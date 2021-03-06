import { note as teoriaNote, Note as TeoriaNote } from 'teoria'

export class Note {

  static parse (value) {
    if (typeof value === 'string') {
      return teoriaNote(value)
    } else if (typeof value === 'object' || value instanceof TeoriaNote) {
      return value
    }

    throw TypeError(`Unknown note type (${typeof value}): ${value}`)
  }

  static expand (kind, note) {
    return notesIn(kind, note)
  }

  static hash (note) {
    return Note.parse(note).chroma()
  }

  static pitchOf (note) {
    return Note.valueOf(note)
  }

  // TODO: Consider using chroma instead
  // TODO: Use this in nek, and anywhere else this same logic might be used
  static valueOf (note) {
    return Note.parse(note)
      .scientific()
      // .toLowerCase()
      // TODO: Centralize! Replace everywhere in bach-sheet, nek, etc.
      .replace(/[0-9]+$/, '')
  }

  static valuesOf (notes) {
    return notes.map(Note.valueOf)
  }

  static generalize (note) {
    return teoriaNote(Note.valueOf(note))
  }

  static unite (notes = []) {
    return [...new Set(Note.valuesOf(notes))]
  }

  static equals (left, right) {
    return Note.hash(left) == Note.hash(right)
  }

}
