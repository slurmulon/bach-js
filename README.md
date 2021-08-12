# bach-js
> :musical_score: Bach music notation library for JS
---

`bach` is a notation for representing musical tracks with a focus on human readability.

You can find detailed information on the `bach` notation by visiting the [project's home page](https://codebach.tech).

This library parses `bach` into [`bach.json`](https://github.com/slurmulon/bach-json-schema) data and establishes the semantics for playback, primarily around music.

It also provides a collection of common data transformation and utility methods that make working with `bach.json` even easier.

It is not ready for production and should be considered experimental.

## Install

```sh
npm i slurmulon/bach-js
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

## License

Copyright &copy; Erik Vavro. All rights reserved.

Licensed under the [MIT License](https://opensource.org/licenses/MIT).
