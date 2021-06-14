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
      const result = elems.get('scale.03Dmmg')

      expect(result).toEqual({
        id: '03Dmmg',
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
        const result = elems.resolve('chord.02Rznz')

        expect(result).toEqual({
          id: '02Rznz',
          kind: 'chord',
          props: [],
          value: 'Gm'
        })
      })

      it('given the same element (identity)', () => {
        const elems = new Elements({ source })
        const subject = elems.all[1]
        const result = elems.resolve(subject)

        expect(result).toEqual(subject)
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

      expect(elems.ids).toEqual(['chord.02h1pn', 'chord.00U6pz', 'chord.02Rznz', 'chord.03MA0a', 'scale.03Dmmg'])
    })
  })
})

describe('static methods', () => {
  describe('cast', () => {
    it('provides a normalized element store, grouped by element kind and id', () => {
      // TODO
    })
  })
})
