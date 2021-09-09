// import { note as teoriaNote, Note as TeoriaNote } from 'teoria'
import { Note, Chord, Scale } from '@tonaljs/tonal'
import { notesIn } from './data'

// TODO: Replce with individual functions and remove class, no longer necessary
// TODO: Remove cyclic reference between data module by bringing in all note related functions.
export function parse (value) {
  if (typeof value === 'string' || typeof value === 'object') {
    return Note.get(value)
  } else if (!Number.isNaN(value)) {
    return Note.get(Note.fromMidi(value))
  }

  throw TypeError(`Unknown note type (${typeof value}): ${value}`)
}

export function all (kind, value) {
  const notes = elements[kind]

  if (notes) {
    return notes(value)
  }

  return []
}


// static hash (note) {
export function chroma (note) {
  return parse(note).chroma
}

export function pitch (note) {
  return Note.simplify(parse(note).pc)
  // const name = Note.simplify(parse(note).name)

  // return Note.pitchClass(name)
}

export function pitches (notes = []) {
  return notes.map(pitch)
}

// static pitchOf (note) {
  // return Note.valueOf(note)
// }

// TODO: Consider using chroma instead
// TODO: Use this in nek, and anywhere else this same logic might be used
// static valueOf (note) {
// static pitchOf (note) {
//   return Note.parse(note)
//     .scientific()
//     // .toLowerCase()
//     // TODO: Centralize! Replace everywhere in bach-sheet, nek, etc.
//     .replace(/[0-9]+$/, '')
// }

// static valuesOf (notes) {
//   return notes.map(Note.valueOf)
// }

// static generalize (note) {
//   // return teoriaNote(Note.valueOf(note))
//   return teoriaNote(Note.pitchOf(note))
// }

// export function unite (notes = []) {
export function unique (notes = []) {
  // return [...new Set(Note.valuesOf(notes))]
  // return [...new Set(notes.map(Note.chroma)].map(1
  return notes.reduce((all, note) => {
    const value = pitch(note)
    const has = all.some(other => equal(note, other))

    return !has ? all.concat(value) : all
  }, [])
}

export function equal (left, right) {
  // return Note.hash(left) == Note.hash(right)
  return chroma(left) === chroma(right)
}

export const elements = {
  note:  value => [pitch(value)],
  chord: value => Chord.get(value).notes,
  scale: value => Scale.get(value).notes,
  penta: value => {
    const [tonic, type] = value.split(' ', 2)
    const kind = type.trim().replace(/(\s*)pentatonic$/, '')
    const name = kind ? `${kind} pentatonic` : 'pentatonic'

    return Scale.get(`${tonic} ${name}`).notes
  }
}

export default { parse, all, chroma, pitch, pitches, unique, equal, elements }
