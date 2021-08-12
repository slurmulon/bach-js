# bach-js
> :musical_score: Bach music notation library for JS
---

`bach` is a semantic music notation designed to be both human and computer friendly.

You can find detailed information on the `bach` notation by visiting the [project's documentation](https://codebach.tech).

This library parses `bach` into [`bach.json`](https://github.com/slurmulon/bach-json-schema) data and establishes the semantics for interpretaion and playback.

It also provides a collection of common interfaces that make working with `bach`'s constructs and values easy.

## Install

```sh
npm i slurmulon/bach-js
```

```sh
yarn add slurmulon/bach-js
```

## Usage

```js
import { Music } from 'bach-js'

const music = new Music(`
  @tempo = 136
  @meter = 3|4

  play! [
    6/4 -> {
      Scale('C# phrygian')
      Chord('C#m')
    }
    6/4 -> Chord('Dmaj7')
  ]
`)

console.log(music.headers)
console.log(music.units)
console.log(music.beats)
console.log(music.elements)
console.log(music.notes)
console.log(music.at(4.5, { is: 'second' }))
```

To see real-world usage check out the web-based [`bach-editor`](https://editor.codebach.tech).

To synchronize `bach` with audio in a browser or browser-like environment, see [`gig`](https://github.com/slurmulon/gig).

## Documentation

### :musical_note: `Music`

The `Music` class is the entry point for all `bach` data.

Accepts `bach` source data as either a UTF-8 string or a valid `bach.json` object:

```js
import { Music } from 'bach-js'

const music = new Music(`play! [1 -> chord('a'), 1 ->  chord('b')]`)
```

#### `.meter`

Provides the standard meter of the `bach` source as a tuple (`[beats-per-bar, beat-unit]`).

Defaults to common time (`4|4`) when none is specified in the source.

Used to establish the time signature and heavily influences all duration calculations.

```js
const music = new Music(`
  @meter = 6|8

  play! [bar -> chord('a'), bar -> chord('b')]
`)

music.meter // [6, 8]
```

#### `.tempo`

Provides the tempo in beats-per-minute (bpm).

Defaults to `120` bpm when none is specified in the source.

Tempos are currently global in `bach` and cannot be changed in the middle of playback (yet... :construction:).

```js
const music = new Music(`
  @tempo = 97

  play! [
    1 -> chord('Am')
    1 -> chord('D7')
  ]
`)

music.tempo // 97
```

#### `.headers`

Provides a map of all headers parsed from `bach` source.

```js
const music = new Music(`
  @tempo = 136
  @meter = 3|4
  @foo = 'bar'

  play! [
    6/4 -> Chord('C#m')
    6/4 -> Chord('Dmaj7')
  ]
`)

music.headers // { tempo: 136, meter: [3, 4], foo: 'bar' }
```

#### `.metrics`

Provides a map of essential metric values parsed from `bach` source.

Prevents applications from needing to calculate these values in real-time, which can be costly.

 - `min`: The minimum/lowest step beat encountered
 - `max`: The maximum/greatest step beat encountered
 - `total`: The total number of step beats

```js
const music = new Music(`
  play! [
    1/2 -> chord('a'),
    1 -> chord('b'),
    1+1/2 -> chord('c')]
  ]
`)

music.metrics // { min: 1, max: 3, total: 6 }
```

#### `.units`

Provides a map of units and their proportions to each other.

Primarily for internal use as the `Durations` class wraps this with a friendly interface.

 - `beat`: The value of a `step` beat and a `pulse` beat in common meter (1 = 1 measure in 4|4)
 - `bar`: The number of `step` and `pulse` beats that equate to a `bar` (measure)
 ` `time`: The number of milliseconds each `step`, `pulse` and `bar` is played for.

```js
const music = new Music(`
  play! [
    1/2 -> chord('a'),
    1 -> chord('b'),
    1+1/2 -> chord('c')]
  ]
`)

music.units
// {
//  beat: { step: 0.5, pulse: 0.25},
//  bar: { step: 2, pulse: 4 },
//  time: { step: 1000, pulse: 500, bar: 2000 }
// }
```

### `.durations`

Provides an interface for accessing, converting and transforming duration values based on the `bach` source.

`bach`'s base unit of durations is the `step`, a quantized unit that's optimal for iteration, interpolation, and extrapolation.

See the `Durations` class for the functionality offered by this interface.

```js
const music = new Music(`
  play! [
    1/2 -> chord('a'),
    1 -> chord('b'),
    1+1/2 -> chord('c')]
  ]
`)

music.durations.cast(2, { is: 'step', as: 'bar' }) // 1
```

### `.at(duration, is)`

Provides a map of each entity and event that occurs at a given duration.

Automatically cycles values that are outside the range of the `bach` source (loop friendly).

 - `beat`: The beat present at the duration (from `music.beats`)
 - `elems` List of elements (by id) playing at the duration (from `music.elements`)
 - `play`: List of elements that should begin playing at the duration
 - `stop`: List of elements that should stop playing at the duration

```js
const music = new Music(`
  @meter = 4|4
  @tempo = 130

  play! [
    1 -> chord('E')
    1/2 -> chord('G#min')
    1/2 -> chord('B')
  ]
`)

music.at(2) // at 2nd step beat
music.at(1850, 'ms') // at 1850 milliseconds
// {
//   beat: { ... },
//   elems: ['chord.01JYuY'],
//   play: ['chord.01JYuY'],
//   stop: ['chord0.240hP']
// }
```

#### `.assign(bach)`

Updates and replaces source `bach` data.

Re-computes and caches properties that, as a getter, are expensive when accessed frequently.

```js
const music = new Music(`play! [1 -> chord('a'), 1 ->  chord('b')]`)

music.assign(`play! [1 -> chord('b'), 1 ->  chord('c')]`)
```

### :clock1: `Durations`

Provides a central interface for accessing, converting and transforming duration values across `bach` units.

Units are interpreted through a "lens" object that specifies the unit of the input value (`is`) and the unit of the ouput value (`as`).

Can be used independently or accessed via `music.durations`.

```js
import { Durations } from 'bach-js'

const durations = new Durations(`
  @meter = 4|4
  @tempo = 120

  play! [
    1 -> chord('E')
    1/2 -> chord('G#min')
    1/2 -> chord('B')
  ]
`)
```

#### Units

`bach-js` establishes units with a key/value map of the unit name (key) and its value proportional to a base unit (value).

The following units are supported by default:

 - `step`/`s`: Step beat
 - `pulse` / `p`: Pulse beat
 - `bar` / `m`: Bar/measure
 - `ms`: Millisecond
 - `second`: Second
 - `2n`: Half note
 - `4n`: Quarter note
 - `8n`: Eigth note
 - `16n`: Sixteenth note
 - `64n`: Sixty-fourth note
 - `4up`: Quarter upbeat
 - `8up`: Eigth upbeat

#### `.cast(duration, lens)`

Converts a time-based duration value from one unit to another using a lens object.

Uses `ms` as the underlying unit since this is expected by basically everything outside of `bach`.

If no lens is provided then the operation is a no-op.

 - `is`: The name/key of the input unit (default: `'step'`)
 - `as`: The name/key of the output unit (default: `'step'`)

```js
durations.cast(1, { as: 'ms' }) // 1000
durations.cast(1, { is: 'bar', as: 'ms' }) // 2000
durations.cast(1, { is: 'bar', as: 'pulse' }) // 4
```

#### `.clamp(duration, lens)`

Converts a duration value and clamps it between a `min` and `max` range specified in the lens.

 - `is`: Input unit (default: `'step'`)
 - `as`: Output unit (default: `'step'`)
 - `min`: Lower bound of the range using `is` unit (default: `0`)
 - `max`: Lower bound of the range using `as` unit (default: `durations.total`)

```js
durations.clamp(12, { is: 'pulse', as: 'bar', min: 0, max: 8 }) // 2
```

#### `.cyclic(duration, lens)`

Converts a duration value and cycles it around a `min` and `max` range specified in the lens.

 - `is`: Input unit (default: `'step'`)
 - `as`: Output unit (default: `'step'`)
 - `min`: Lower bound of the range using `is` unit (default: `0`)
 - `max`: Lower bound of the range using `as` unit (default: `durations.total`)

```js
durations.cyclic(16, { min: 4, max: 12 }) // 8
durations.cyclic(16, { is: 'pulse', as: 'bar', min: 4, max: 12 }) // 2
```

#### `.delta(duration, lens)`

Converts a duration value and determines the delta from `min` (e.g. elapsed time since min).

 - `is`: Input unit (default: `'step'`)
 - `as`: Output unit (default: `'step'`)
 - `min`: Lower bound of the range using `is` unit (default: `0`)

```js
durations.delta(2) // 2
durations.delta(2, { as: 'ms' }) // 2000
durations.delta(3, { as: 'ms', min: 1.5 }) // 1500
```

#### `.progress(duration, lens)`

Converts a duration value and determines its ratio within a range.

 - `is`: Input unit (default: `'step'`)
 - `min`: Lower bound of the range using `is` unit (default: `0`)
 - `max`: Lower bound of the range using `is` unit (default: `0`)

```js
durations.progress(4, { min: 2, max: 6 }) // 0.5
```

#### `.lerp(ratio, lens)`

Converts a ratio value (0 - 1) into a step unit within a range (basic linear interpolation).

 - `min`: Lower bound of the range using `is` unit (default: `0`)
 - `max`: Lower bound of the range using `is` unit (default: `0`)

```js
durations.lerp(0.5, { min: 2, max: 6 }) // 4
```
#### `.invlerp(duration, lens)`

Converts a duration value into a ratio within a range (inverse of lerp).

 - `min`: Lower bound of the range using `is` unit (default: `0`)
 - `max`: Lower bound of the range using `is` unit (default: `0`)

```js
durations.invlerp(4, { min: 2, max: 6 }) // 0.5
```

## Roadmap

 - [ ] TypeScript
 - [ ] Custom domains (instead of just music)
 - [ ] Migrate from `teoria` to `tonal`

## License

Copyright &copy; Erik Vavro. All rights reserved.

Licensed under MIT.
