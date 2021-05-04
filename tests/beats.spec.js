// import { Beat } from '../src/beats'
import { Music } from '../src/music'
import { basic as source } from './fixtures/bach'

const music = new Music(source)

describe('musical', () => {
  describe('elements', () => {
    it('resolves and returns all elements in the beat', () => {
      const [beat] = music.beats

      expect(beat.elements).toEqual([
        {
          id: '1np1h2',
          kind: 'chord',
          value: 'A7',
          props: [],
          notes: [ 'A', 'C#', 'E', 'G' ]
        },
        {
          id: 'LgmmD3',
          kind: 'scale',
          value: 'A dorian',
          props: [],
          notes: [
            'A', 'B', 'C',
            'D', 'E', 'F#',
            'G'
          ]
        }
      ])
    })
  })

  describe('parts', () => {
    // WARN: Currently only supports one element per kind, think about if this is ideal
    it('provides the elements in the beat, grouped by kind', () => {
      const [beat] = music.beats

      expect(beat.parts).toEqual({
        chord: {
          id: '1np1h2',
          kind: 'chord',
          value: 'A7',
          props: [],
          notes: [ 'A', 'C#', 'E', 'G' ]
        },
        scale: {
          id: 'LgmmD3',
          kind: 'scale',
          value: 'A dorian',
          props: [],
          notes: [
            'A', 'B', 'C',
            'D', 'E', 'F#',
            'G'
          ]
        }
      })
    })
  })
})


