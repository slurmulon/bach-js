import { Beat } from './elements'
import validate from './validate'

// Creates Bach.JSON beat elements from minimal data
// WARN: Now dup'd in rebach
export const atomize = (kind, value) => ({
  keyword: kind.toLowerCase(),
  arguments: [value]
})

export const normalize = source => {
  if (validate(source)) {
    return Object.assign(source, {
      data: source.data.map(Beat.from)
    })
  }

  console.error(validate.errors)

  throw TypeError('Invalid Bach.JSON data')
}

// Converts a parsed Track's `data` back into its serialized form (vanilla bach.json)
export const serialize = track => {
  const data = track.data
    .map(measure => {
      return measure.map(beat => {
        return beat && beat.data
      })
    })

  return Object.assign({}, track, { data })
}

// Creates a reduced and simplified version of the track with only populated sections
export const sectionize = source => source.data
  .map(measure =>
    measure
      .filter(beat => !!beat.data)
      .map(simplifyBeat)
  )
  .reduce((all, one) => all.concat(one), [])

// Groups sequentially identical phrases by summation of duration:
// TODO
export const condense = source => {
  // e.g.
  // [1 -> :A, 3 -> :A]
  //    becomes
  // [4 -> :A]
  //
  // Note: Does not wrap head and tail if there's more than 2 elements
}

// Provides a reduced/simplified representation of a Bach beat item/element
export const simplifyBeatItem = item => {
  const { keyword, arguments: [value] } = item
  const kind = keyword.toLowerCase()

  return { kind, value }
}

// Provides a reduced/simplified representation of a Bach beat and its items
export const simplifyBeat = beat => beat.data.items
  .map(simplifyBeatItem)
  .reduce((acc, note) => Object.assign(acc, {
    duration: beat.data.duration,
    [note.kind]: note.value
  }), {})

export default { atomize, normalize, serialize, simplifyNote, simplifyBeat }
