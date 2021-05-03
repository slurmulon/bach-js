// import json from 'rollup-plugin-json'
// import babel from 'rollup-plugin-babel'

// export default {
//   entry: 'src/index.js',
//   dest: 'dist/bundle.js',
//   format: 'cjs',
//   plugins: [
//     json(),
//     babel({
//       presets: [ 'es2015-rollup' ],
//       babelrc: false
//     })
//   ]
// }


import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

const config = {
  input: 'src/index.js',
  output: {
    dir: 'output',
    // format: 'esm'
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ]
}

export default config;
