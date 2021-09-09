import { Music } from '../src/music'
import { Beat } from '../src/beats'
import { compose } from '../src/compose'
import { basic as source } from './fixtures/bach'

describe('class methods', () => {
  describe('parses', () => {
    it('returns false if syntax is invalid', () => {
      const music = new Music('bad!')

      expect(music.parses).toBe(false)
    })

    it('returns true if syntax is valid', () => {
      const music = new Music(source)

      expect(music.parses).toBe(true)
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
})
