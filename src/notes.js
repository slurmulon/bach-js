import { Note, Chord, Scale } from '@tonaljs/tonal'

export function parse (value) {
  if (typeof value === 'string' || (typeof value === 'object' && !Array.isArray(value))) {
    return Note.get(value)
  } else if (typeof value === 'number' && !Number.isNaN(value)) {
    return Note.get(Note.fromMidi(value))
  }

  return Note.get(null)
}

export function all (kind, value) {
  const resolver = resolvers[kind]

  if (resolver && typeof value === 'string') {
    return resolver(value.toLowerCase())
  }

  return []
}

export function chroma (note) {
  return parse(note).chroma
}

export function pitch (note) {
  return Note.simplify(parse(note).pc)
}

export function pitches (notes = []) {
  return notes.map(pitch)
}

export function unique (notes = []) {
  return notes.reduce((all, note) => {
    const value = pitch(note)
    const has = all.some(other => equal(note, other))

    return !has ? all.concat(value) : all
  }, [])
}

export function equal (left, right) {
  return chroma(left) === chroma(right)
}

export const resolvers = {
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

export default { parse, all, chroma, pitch, pitches, unique, equal, resolvers }
