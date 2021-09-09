import Notes from '../src/notes'
import { Note as TonalNote } from '@tonaljs/tonal'

describe('parse', () => {
  describe('converts value into a tonal object', () => {
    it('accepts strings', () => {
      const result = Notes.parse('C')

      expect(result.name).toEqual('C')
    })

    it('accepts numbers (as MIDI)', () => {
      const result = Notes.parse(64)

      expect(result.name).toEqual('E4')
    })

    it('accepts objects', () => {
      const note = TonalNote.get('D2')
      const result = Notes.parse(note)

      expect(result).toEqual(note)
    })

    it('returns empty tonal object for all other types', () => {
      const empty = TonalNote.get(null)

      expect(Notes.parse([])).toEqual(empty)
      expect(Notes.parse(true)).toEqual(empty)
      expect(Notes.parse(false)).toEqual(empty)
      expect(Notes.parse(null)).toEqual(empty)
      expect(Notes.parse(undefined)).toEqual(empty)
      expect(Notes.parse(Symbol('C'))).toEqual(empty)
    })
  })
})

describe('chroma', () => {
  it('parses a note and provides its chroma', () => {
    expect(Notes.chroma('A')).toBe(9)
    expect(Notes.chroma('B')).toBe(11)
    expect(Notes.chroma('Cbbbb')).toBe(8)
  })
})

describe('pitch', () => {
  it('parses a note and provides its simplified pitch class', () => {
    expect(Notes.pitch('Ab')).toEqual('Ab')
    expect(Notes.pitch('C#4')).toEqual('C#')
    expect(Notes.pitch('B###4')).toEqual('D')
  })
})

describe('pitches', () => {
  it('parses notes and provides their simplified pitch class', () => {
    const result = Notes.pitches(['E', 'F#3', 'Dbb5'])

    expect(result).toEqual(['E', 'F#', 'C'])
  })
})

describe('unique', () => {
  it('parses notes into pitches and removes duplicates', () => {
    const notes = ['C', 'C2', 'C4', 'D', 'E#', 'F', 'A#', 'Bb', 'G###4']
    const result = Notes.unique(notes)

    expect(result).toEqual(['C', 'D', 'F', 'A#'])
  })
})

describe('equal', () => {
  it('determines if two notes are equal based on their chroma', () => {
    expect(Notes.equal('C', 'C')).toBe(true)
    expect(Notes.equal('D2', 'D4')).toBe(true)
    expect(Notes.equal('A#', 'Bb')).toBe(true)
    expect(Notes.equal('C#2', 'Db3')).toBe(true)
    expect(Notes.equal('C', 'G')).toBe(false)
  })
})

describe('all', () => {
  describe('provides all notes in a supported musical element kind', () => {
    it('as note', () => {
      const result = Notes.all('note', 'Bb')

      expect(result).toEqual(['Bb'])
    })

    it('as scale', () => {
      const result = Notes.all('scale', 'C dorian')

      expect(result).toEqual(['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'])
    })

    it('as chord', () => {
      const result = Notes.all('chord', 'Dmaj7')

      expect(result).toEqual(['D', 'F#', 'A', 'C#'])
    })

    describe('as penta', () => {
      it('using tonal format (explicit)', () => {
        const result = Notes.all('penta', 'A minor pentatonic')

        expect(result).toEqual(['A', 'C', 'D', 'E', 'G'])
      })

      it('using tonal format (implicit)', () => {
        const result = Notes.all('penta', 'A')

        expect(result).toEqual(['A', 'B', 'C#', 'E', 'F#'])
      })

      it('using tonal format (major alias)', () => {
        const result = Notes.all('penta', 'C pentatonic')

        expect(result).toEqual(['C', 'D', 'E', 'G', 'A'])
      })

      it('using teoria format', () => {
        const result = Notes.all('penta', 'G majorpentatonic')

        expect(result).toEqual(['G', 'A', 'B', 'D', 'E'])
      })
    })

    describe('kinds are case-insensitive', () => {
      it('as note', () => {
        expect(Notes.all('NoTe', 'F#')).toEqual(['F#'])
      })

      it('as scale', () => {
        expect(Notes.all('sCAlE', 'A minor')).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
      })

      it('as chord', () => {
        expect(Notes.all('CHOrD', 'G')).toEqual(['G', 'B', 'D'])
      })

      it('as penta', () => {
        expect(Notes.all('penTA', 'C pentatonic')).toEqual(['C', 'D', 'E', 'G', 'A'])
      })
    })

    describe('values are case-insensitive', () => {
      it('as scale', () => {
        expect(Notes.all('scale', 'a MinoR')).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
      })

      it('as chord', () => {
        expect(Notes.all('chord', 'fMAj7')).toEqual(['F', 'A', 'C', 'E'])
      })

      it('as penta', () => {
        expect(Notes.all('penta', 'd MiNOR PEntaTOniC')).toEqual(['D', 'F', 'G', 'A', 'C'])
      })
    })

    describe('invalid kind', () => {
      it('return an empty array', () => {
        const result = Notes.all('bad', 'Cmaj7')

        expect(result).toEqual([])
      })
    })

    describe('invalid value', () => {
      it('returns an empty array', () => {
        const result = Notes.all('chord', 'notta')

        expect(result).toEqual([])
      })
    })

    describe('invalid kind and value', () => {
      it('returns an empty array', () => {
        const result = Notes.all('bad', 'stuff')

        expect(result).toEqual([])
      })
    })
  })
})
