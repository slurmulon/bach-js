# bach-js
> :musical_score: Bach music notation parser for JS
---

`bach` is a notation for representing musical tracks with a focus on human readability.

You can find detailed information on the `bach` notation by visiting the [repository home page](https://github.com/slurmulon/bach).

This library parses `bach` into [bach.json](https://github.com/slurmulon/bach-json-schema) data and establishes the semantics.

It also provides a collection of common data transformation and utility methods that make working with `bach.json` even easier.

It is not ready for production and should be considered experimental.

## Install

```sh
npm i slurmulon/bach-js
```

## Usage

```js
import { Track } from 'bach-js'

const track = new Track("@Tempo = 78 !Play [1 -> { Scale('B mixolydian') Chord('B') } 1 -> Chord('A')]")

console.log(track.headers)
console.log(track.data)
```

## License

MIT
