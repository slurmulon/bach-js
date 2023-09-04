import { note as teoriaNote, Note as TeoriaNote } from 'teoria'
import { scaleify, chordify } from './data'

// TODO: Replce with individual functions and remove class, no longer necessary
// TODO: Remove cyclic reference between data module by bringing in all note related functions.
export class Note {

  static parse (value) {
    if (typeof value === 'string') {
      return teoriaNote(value)
    } else if (typeof value === 'object' || value instanceof TeoriaNote) {
      return value
    }

    throw TypeError(`Unknown note type (${typeof value}): ${value}`)
  }

  static all (kind, note) {
    try {
      return notesIn(kind, note)
    } catch (e) {
      return []
    }
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
    return notes.reduce((all, note) => {
      const value = Note.valueOf(note)
      const has = Note.includes(all, value)

      return !has ? all.concat(value) : all
    }, [])
  }

  static includes (notes = [], note) {
    return notes.some(other => Note.equals(other, note))
  }

  static equals (left, right) {
    return Note.hash(left) == Note.hash(right)
  }

}

export function notesInChord (value) {
  return chordify(value)
    .notes()
    .map(note => Note.valueOf(note))
}

export function notesInScale (value) {
  return scaleify(value)
    .notes()
    .map(note => Note.valueOf(note))
}

export function notesIn (kind, value) {
  const notes = notesOf[kind]

  if (notes) {
    return notes(value)
  }

  return []
}

// TODO: Allow custom note resolvers to be registered globally or locally so people can easily define their own semantics
//  - Could call this `itemsOf` to be more generic and flexible
export const notesOf = {
  note:  value => [value],
  chord: value => notesInChord(value),
  scale: value => notesInScale(value),
  penta: value => notesInScale(value)
}

// TODO: Note.valueOf
export function notesIntersect (left, right) {
 return left.filter(note => right.includes(note))
}
