import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  format: 'cjs',
  plugins: [
    json(),
    babel({
      presets: [ 'es2015-rollup' ],
      babelrc: false
    })
  ]
}
