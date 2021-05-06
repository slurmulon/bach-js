import { Durations } from '../src/durations'
import { basic as source } from './fixtures/bach'

const durations = new Durations(source)

describe('interval', () => {
  it('provides the number of milliseconds in a step', () => {
    expect(durations.interval).toEqual(800)
  })
})

describe('cast', () => {
  it('step -> pulse (default)', () => {
    const result = durations.cast(4)

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
  it('step -> ms (default)', () => {
    const result = durations.time(4)

    expect(result).toBe(3200)
  })

  it('pulse -> ms', () => {
    const result = durations.time(6, { is: 'pulse' })

    expect(result).toBe(2400)
  })

  it('bar -> ms', () => {
    const result = durations.time(3.5, { is: 'bar' })

    expect(result).toBe(5600)
  })

  it('step -> second', () => {
    const result = durations.time(2, { as: 'second' })

    expect(result).toBe(1.6)
  })

  it('pulse -> second', () => {
    const result = durations.time(4, { is: 'pulse', as: 'second' })

    expect(result).toBe(1.6)
  })

  it('bar -> second', () => {
    const result = durations.time(2, { is: 'bar', as: 'second' })

    expect(result).toBe(3.2)
  })

  it('ms -> second', () => {
    const result = durations.time(2000, { is: 'ms', as: 'second' })

    expect(result).toBe(2)
  })

  it('second -> ms', () => {
    const result = durations.time(4, { is: 'second', as: 'ms' })

    expect(result).toBe(4000)
  })
})

describe('metronize', () => {
  
})

describe('ratio', () => {
  describe('provides the ratio of a duration in relation to the total', () => {
    it('is steps', () => {
      const result = durations.ratio(16)

      expect(result).toBe(0.4)
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
})

describe('at', () => {
  describe('provides the step signals at a given duration', () => {
    it('is step', () => {
      const result = durations.at(6)

      expect(result).toEqual({
        beat: 1,
        play: ['chord.Wzp6U0'],
        stop: ['chord.1np1h2', 'scale.LgmmD3']
      })
    })

    it('is pulse', () => {
      const result = durations.at(12, 'pulse')

      expect(result).toEqual({
        beat: 1,
        play: ['chord.Wzp6U0'],
        stop: ['chord.1np1h2', 'scale.LgmmD3']
      })
    })

    it('is bar', () => {
      const result = durations.at(5, 'bar')

      expect(result).toEqual({
        beat: 2,
        play: ['chord.1np1h2', 'scale.LgmmD3'],
        stop: ['chord.Wzp6U0']
      })
    })

    it('is ms', () => {
      const result = durations.at(4800, 'ms')

      expect(result).toEqual({
        beat: 1,
        play: ['chord.Wzp6U0'],
        stop: ['chord.1np1h2', 'scale.LgmmD3']
      })
    })
  })
})

describe('interpolate', () => {
  describe('provides the step index at a given ratio', () => {
    it('basic', () => {
      const result = durations.interpolate(0.25)

      expect(result).toBe(10)
    })

    describe('using', () => {
      it('is', () => {
        const result = durations.interpolate(0.5, { is: 'pulse', min: 0, max: 80 })

        expect(result).toBe(20)
      })

      it('min', () => {
        const result = durations.interpolate(0.5, { min: 20 })

        expect(result).toBe(30)
      })

      it('max', () => {
        const result = durations.interpolate(0.5, { max: 10 })

        expect(result).toBe(5)
      })

      it('min and max', () => {
        const result = durations.interpolate(0.5, { min: 20, max: 60 })

        expect(result).toBe(40)
      })
    })
  })
})

describe('rhythmic', () => {
  describe('adjusts durations to the closest duration unit', () => {
    describe('units', () => {
      it('default', () => {
        const result = durations.rhythmic({ duration: 3987 })

        // closest 8th note
        expect(result).toBe(3600)
      })

      it('is step', () => {
        const result = durations.rhythmic({ duration: 2.25, is: 'step' })

        expect(result).toBe(2)
      })

      it('is pulse', () => {
        const result = durations.rhythmic({ duration: 2.5, is: 'pulse' })

        expect(result).toBe(2)
      })

      it('is bar', () => {
        const result = durations.rhythmic({ duration: 3.6, is: 'bar' })

        expect(result).toBe(3.5)
      })

      it('is second', () => {
        const result = durations.rhythmic({ duration: 1, is: 'second' })

        expect(result).toBe(0.8)
      })
    })

    describe('calc', () => {
      describe('applies Math calc function to each unitized duration', () => {
        const duration = 4987

        it('floor', () => {
          const result = durations.rhythmic({ duration, calc: 'floor' })

          expect(result).toBe(4800)
        })

        it('ceil', () => {
          const result = durations.rhythmic({ duration, calc: 'ceil' })

          expect(result).toBe(5000)
        })

        it('abs', () => {
          const result = durations.rhythmic({ duration, calc: 'abs' })

          expect(result).toBe(4987)
        })
      })
    })

    describe('size', () => {
      describe('chooses from resulting casted units by', () => {
        const duration = 654

        it('min', () => {
          const result = durations.rhythmic({ duration, size: 'min' })

          expect(result).toBe(400)
        })

        it('max', () => {
          const result = durations.rhythmic({ duration, size: 'max', calc: 'ceil' })

          expect(result).toBe(800)
        })
      })
    })
  })
})
