import { Durations } from '../src/durations'
import { basic as source, compound } from './fixtures/bach'

const durations = new Durations(source)

// describe('interval', () => {
//   it('provides the number of milliseconds in a step', () => {
//     expect(durations.interval).toEqual(800)
//   })
// })

describe('cast', () => {
  describe('units', () => {
    it('identity', () => {
      const result = durations.cast(4)

      expect(result).toBe(4)
    })

    it('step -> pulse', () => {
      const result = durations.cast(4, { as: 'pulse' })

      expect(result).toBe(8)
    })

    it('pulse -> step', () => {
      const result = durations.cast(4, { is: 'pulse', as: 'step' })

      expect(result).toBe(2)
    })

    it('step -> bar', () => {
      const result = durations.cast(10, { as: 'bar' })

      expect(result).toBe(5)
    })

    it('pulse -> bar', () => {
      const result = durations.cast(12, { is: 'pulse', as: 'bar' })

      expect(result).toBe(3)
    })

    it('bar -> step', () => {
      const result = durations.cast(5, { is: 'bar', as: 'step' })

      expect(result).toBe(10)
    })

    it('bar -> pulse', () => {
      const result = durations.cast(2, { is: 'bar', as: 'pulse' })

      expect(result).toBe(8)
    })
  })

  describe('time', () => {
    it('step -> ms', () => {
      const result = durations.cast(4, { as: 'ms' })

      expect(result).toBe(3200)
    })

    it('pulse -> ms', () => {
      const result = durations.cast(6, { is: 'pulse', as: 'ms' })

      expect(result).toBe(2400)
    })

    it('bar -> ms', () => {
      const result = durations.cast(3.5, { is: 'bar', as: 'ms' })

      expect(result).toBe(5600)
    })

    it('step -> second', () => {
      const result = durations.cast(2, { as: 'second' })

      expect(result).toBe(1.6)
    })

    it('pulse -> second', () => {
      const result = durations.cast(4, { is: 'pulse', as: 'second' })

      expect(result).toBe(1.6)
    })

    it('bar -> second', () => {
      const result = durations.cast(2, { is: 'bar', as: 'second' })

      expect(result).toBe(3.2)
    })

    it('ms -> second', () => {
      const result = durations.cast(2000, { is: 'ms', as: 'second' })

      expect(result).toBe(2)
    })

    it('second -> ms', () => {
      const result = durations.cast(4, { is: 'second', as: 'ms' })

      expect(result).toBe(4000)
    })
  })
})

// describe('unitize', () => {
//   const durations = new Durations(compound)

//   describe('units', () => {
//     it('step -> pulse (default)', () => {
//       const result = durations.unitize(2)

//       expect(result).toBe(12)
//     })

//     it('pulse -> step', () => {
//       const result = durations.unitize(6, { is: 'pulse', as: 'step' })

//       expect(result).toBe(1)
//     })

//     it('step -> bar', () => {
//       const result = durations.unitize(4, { as: 'bar' })

//       expect(result).toBe(4)
//     })

//     it('pulse -> bar', () => {
//       const result = durations.unitize(18, { is: 'pulse', as: 'bar' })

//       expect(result).toBe(3)
//     })

//     it('bar -> step', () => {
//       const result = durations.unitize(4, { is: 'bar', as: 'step' })

//       expect(result).toBe(4)
//     })

//     it('bar -> pulse', () => {
//       const result = durations.unitize(2, { is: 'bar', as: 'pulse' })

//       expect(result).toBe(12)
//     })
//   })

//   describe('time', () => {
//     it('step -> ms', () => {
//       const result = durations.unitize(2, { as: 'ms' })

//       expect(result).toBe(6000)
//     })

//     it('pulse -> ms', () => {
//       const result = durations.unitize(3, { is: 'pulse', as: 'ms' })

//       expect(result).toBe(1500)
//     })

//     it('bar -> ms', () => {
//       const result = durations.unitize(2.5, { is: 'bar', as: 'ms' })

//       expect(result).toBe(7500)
//     })

//     it('step -> second', () => {
//       const result = durations.unitize(2, { as: 'second' })

//       expect(result).toBe(6)
//     })

//     it('pulse -> second', () => {
//       const result = durations.unitize(5, { is: 'pulse', as: 'second' })

//       expect(result).toBe(2.5)
//     })

//     it('bar -> second', () => {
//       const result = durations.unitize(2.5, { is: 'bar', as: 'second' })

//       expect(result).toBe(7.5)
//     })

//     it('ms -> second', () => {
//       const result = durations.unitize(2345, { is: 'ms', as: 'second' })

//       expect(result).toBe(2.345)
//     })

//     it('second -> ms', () => {
//       const result = durations.unitize(4.567, { is: 'second', as: 'ms' })

//       expect(result).toBe(4567)
//     })
//   })
// })

describe('metronize', () => {
  
})

describe('scope', () => {
  describe('provides an object with cast durations describing a scope (used by other methods)', () => {
    it('defaults to full scope', () => {
      const result = durations.scope(4, { as: 'step' })

      expect(result).toEqual({ value: 4, index: 4, head: 0, tail: 40 })
    })

    it('using cast', () => {
      // const result = durations.scope(
    })

    it('using min', () => {
      const result = durations.scope(4, { min: 2 })

      expect(result).toEqual({ value: 4, index: 4, head: 2, tail: 40 })
    })

    it('using max', () => {
      const result = durations.scope(4, { max: 25 })

      expect(result).toEqual({ value: 4, index: 4, head: 0, tail: 25 })
    })

    it('using min + max', () => {
      const result = durations.scope(4, { min: 3, max: 8 })

      expect(result).toEqual({ value: 4, index: 4, head: 3, tail: 8 })
    })
  })
})

// describe('ratio', () => {
//   describe('provides the ratio of a duration in relation to the total', () => {
//     it('using steps', () => {
//       const result = durations.ratio(16)

//       expect(result).toBe(0.4)
//     })
//   })
// })

describe('progress', () => {
  describe('provides the progress of a duration (between 0 and 1) within a scope', () => {
    it('using default scope', () => {
      const result = durations.progress(10)

      expect(result).toBe(0.25)
    })

    it('using cast', () => {

    })

    it('using min', () => {
      const result = durations.progress(30, { min: 20 })

      expect(result).toBe(0.5)
    })

    it('using max', () => {
      const result = durations.progress(30, { min: 20 })

      expect(result).toBe(0.5)
    })

    it('using min + max', () => {
      const result = durations.progress(14, { min: 7, max: 21 })

      expect(result).toBe(0.5)
    })
  })
})

describe('clamp', () => {
  describe('ensures duration fits within a min/max range', () => {
    it('max', () => {
      const result = durations.clamp(60)

      expect(result).toBe(40)
    })

    it('min', () => {
      const result = durations.clamp(-10)

      expect(result).toBe(0)
    })
  })
})

describe('cyclic', () => {
  describe('ensures duration cycles around a min/max range', () => {
    it('max', () => {
      const result = durations.cyclic(60)

      expect(result).toBe(20)
    })

    it('min', () => {
      const result = durations.cyclic(-10)

      expect(result).toBe(30)
    })
  })

  describe('supports inplace duration casts', () => {
    it('step -> pulse', () => {
      // const result = durations.cast(60, { is: 'step', as: 'pulse' })
      const result = durations.cyclic(60, { is: 'step', as: 'pulse' })

      expect(result).toBe(40)

    })
  })
})

describe('at', () => {
  describe('provides the step state at a given duration', () => {
    it('is step', () => {
      const result = durations.at(6)

      expect(result).toEqual({
        beat: 1,
        index: 6,
        elems: ['chord.00U6pz'],
        play: ['chord.00U6pz'],
        stop: ['chord.02h1pn', 'scale.03Dmmg']
      })
    })

    it('is pulse', () => {
      const result = durations.at(12, 'pulse')

      expect(result).toEqual({
        beat: 1,
        index: 6,
        elems: ['chord.00U6pz'],
        play: ['chord.00U6pz'],
        stop: ['chord.02h1pn', 'scale.03Dmmg']
      })
    })

    it('is bar', () => {
      const result = durations.at(5, 'bar')

      expect(result).toEqual({
        beat: 2,
        index: 10,
        elems: ['chord.02h1pn', 'scale.03Dmmg'],
        play: ['chord.02h1pn', 'scale.03Dmmg'],
        stop: ['chord.00U6pz']
      })
    })

    it('is ms', () => {
      const result = durations.at(4800, 'ms')

      expect(result).toEqual({
        beat: 1,
        index: 6,
        elems: ['chord.00U6pz'],
        play: ['chord.00U6pz'],
        stop: ['chord.02h1pn', 'scale.03Dmmg']
      })
    })
  })
})

describe('lerp', () => {
  describe('provides the step index at a given ratio', () => {
    it('default (step -> pulse)', () => {
      const result = durations.lerp(0.25)

      expect(result).toBe(10)
      // expect(result).toBe(20)
    })

    describe('using', () => {
      it('is', () => {
        const result = durations.lerp(0.5, { is: 'pulse', as: 'step', min: 0, max: 80 })

        expect(result).toBe(20)
      })

      it('min', () => {
        const result = durations.lerp(0.5, { as: 'step', min: 20 })

        expect(result).toBe(30)
      })

      it('max', () => {
        const result = durations.lerp(0.5, { as: 'step', max: 10 })

        expect(result).toBe(5)
      })

      it('min and max', () => {
        const result = durations.lerp(0.5, { as: 'step', min: 20, max: 60 })

        expect(result).toBe(40)
      })
    })
  })
})

describe('rhythmic', () => {
  describe('adjusts durations to the closest duration unit', () => {
    describe('units', () => {
      it('default', () => {
        const result = durations.rhythmic(3987)

        // closest 8th note
        expect(result).toBe(3600)
      })

      it('is step', () => {
        const result = durations.rhythmic(2.25, { is: 'step' })

        expect(result).toBe(2)
      })

      it('is pulse', () => {
        const result = durations.rhythmic(2.5, { is: 'pulse' })

        expect(result).toBe(2)
      })

      it('is bar', () => {
        const result = durations.rhythmic(3.6, { is: 'bar' })

        expect(result).toBe(3.5)
      })

      it('is second', () => {
        const result = durations.rhythmic(1, { is: 'second' })

        expect(result).toBe(0.8)
      })
    })

    describe('calc', () => {
      describe('applies Math calc function to each unitized duration', () => {
        const duration = 4987

        it('floor', () => {
          const result = durations.rhythmic(duration, { calc: 'floor' })

          expect(result).toBe(4800)
        })

        it('ceil', () => {
          const result = durations.rhythmic(duration, { calc: 'ceil' })

          expect(result).toBe(5000)
        })

        it('abs', () => {
          const result = durations.rhythmic(duration, { calc: 'abs' })

          expect(result).toBe(4987)
        })
      })
    })

    describe('size', () => {
      describe('chooses from resulting casted units by', () => {
        const duration = 654

        it('min', () => {
          const result = durations.rhythmic(duration, { size: 'min' })

          expect(result).toBe(400)
        })

        it('max', () => {
          const result = durations.rhythmic(duration, { size: 'max', calc: 'ceil' })

          expect(result).toBe(800)
        })
      })
    })
  })
})
