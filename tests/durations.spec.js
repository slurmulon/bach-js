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
