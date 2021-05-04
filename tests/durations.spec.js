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

    expect(result).toBe(2.5)
  })

  it('pulse -> bar', () => {
    const result = durations.cast(12, { is: 'pulse', as: 'bar' })

    expect(result).toBe(1.5)
  })

  it('bar -> step', () => {
    const result = durations.cast(5, { is: 'bar', as: 'step' })

    expect(result).toBe(20)
  })

  it('bar -> pulse', () => {
    const result = durations.cast(1.25, { is: 'bar', as: 'pulse' })

    expect(result).toBe(10)
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
      const result = durations.at(2.5, 'bar')

      // console.log('bar steps', durations.steps)

      expect(result).toEqual({
        beat: 2,
        play: ['chord.1np1h2', 'scale.LgmmD3'],
        stop: ['chord.Wzp6U0']
      })
    })

    it('is ms', () => {

    })
  })
})
