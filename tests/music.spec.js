import { Music } from '../src/music'
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
      const music = new Music({ source })

      expect(music.parses).toBe(true)
      
      // const music = compose(source)

      // expect(music.fail).not.toBeDefined()
    })
  })
})
