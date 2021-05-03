import { Elements } from '../src/elements'
// import b from 'bach-cljs'

// console.log('BACHHHH', b)

const bach = `@Tempo = 150

  :a = chord('A7')
  :e = chord('E6')
  :g = chord('Gm')
  :f = chord('F#')

  :part-a = 3 of [
    3 -> { :a, scale('A dorian') }
    2 -> :e
    when 3 do { 1 -> :g }
  ]

  :part-b = 2 of [
    when 1 do { 2 -> :a }
    1/2 -> :f
    1/2 -> :e
  ]

  play! [:part-a :part-b]
`


// const bach = `@Meter = 3|4

// play! [
//   bar -> {
//     Scale('
// ]

describe('class methods', () => {
  describe('all', () => {
    it('provides a list of every parsed element', () => {
      const elems = new Elements({ source: bach })

      expect(elems.all.length).toBe(5)
    })
  })

  describe('get', () => {
    it('provides the element associated with an id', () => {
      const elems = new Elements({ source: bach })
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
        const elems = new Elements({ source: bach })
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
      const elems = new Elements({ source: bach })

      expect(elems.kinds).toEqual(['chord', 'scale'])
    })

  })

  describe('ids', () => {
    it('provides a list of every element\'s id', () => {
      const elems = new Elements({ source: bach })

      expect(elems.ids).toEqual(['chord.1np1h2', 'chord.Wzp6U0', 'chord.PznzR2', 'chord.ua0AM3', 'scale.LgmmD3'])
    })
  })
})

describe('static methods', () => {
  describe('cast', () => {

  })
})
