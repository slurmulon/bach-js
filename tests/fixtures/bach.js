export const basic = `@Tempo = 150

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

export default { basic }
