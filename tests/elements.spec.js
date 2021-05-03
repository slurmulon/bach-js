import { Elements } from '../src/elements'
import { basic as source } from './fixtures/bach'

describe('class methods', () => {
  describe('all', () => {
    it('provides a list of every parsed element', () => {
      const elems = new Elements({ source })

      expect(elems.all.length).toBe(5)
    })
  })

  describe('get', () => {
    it('provides the element associated with an id', () => {
      const elems = new Elements({ source })
      const result = elems.get('scale.LgmmD3')

      expect(result).toEqual({
        id: 'LgmmD3',
        kind: 'scale',
        props: [],
        value: 'A dorian'
      })
    })
  })

  describe('resolve', () => {
    describe('provides an element', () => {
      it('given an id', () => {
        const elems = new Elements({ source })
        const result = elems.resolve('chord.PznzR2')

        expect(result).toEqual({
          id: 'PznzR2',
          kind: 'chord',
          props: [],
          value: 'Gm'
        })
      })
    })
  })

  describe('kinds', () => {
    it('provides a list of every element\'s kind', () => {
      const elems = new Elements({ source })

      expect(elems.kinds).toEqual(['chord', 'scale'])
    })

  })

  describe('ids', () => {
    it('provides a list of every element\'s id', () => {
      const elems = new Elements({ source })

      expect(elems.ids).toEqual(['chord.1np1h2', 'chord.Wzp6U0', 'chord.PznzR2', 'chord.ua0AM3', 'scale.LgmmD3'])
    })
  })
})

describe('static methods', () => {
  describe('cast', () => {

  })
})
