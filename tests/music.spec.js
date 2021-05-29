import { Music } from '../src/music'
import { Beat } from '../src/beats'
import { compose } from '../src/data'
import { basic as source } from './fixtures/bach'

describe('class methods', () => {
  describe('parses', () => {
    it('returns false if syntax is invalid', () => {
      const music = new Music('bad!')

      expect(music.parses).toBe(false)

      // const music = compose('bad!')

      // expect(music.fail).toBe(true)
    })

    it('returns true if syntax is valid', () => {
      const music = new Music(source)

      expect(music.parses).toBe(true)
      
      // const music = compose(source)

      // expect(music.fail).not.toBeDefined()
    })
  })

  describe('beats', () => {
    it('provides all parsed beats', () => {
      const music = new Music(source)

      expect(music.beats.length).toBe(12)

      music.beats.forEach(beat => {
        expect(beat).toBeInstanceOf(Beat)
      })
    })
  })

  describe('add', () => {
    it('pushes new element into a beat item', () => {
      const music = new Music(source)

      const elem = music.add({
        beat: 0,
        item: 0,
        elem: {
          kind: 'penta',
          value: 'A minorpentatonic',
          props: []
        }
      })

      const added = music
        .beats[0]
        .items[0]
        .elements
        .find(elem => elem.kind === 'penta')

      expect(added).not.toBeNull()
    })
  })
})
