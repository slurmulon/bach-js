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


// import { babel } from '@rollup/plugin-babel'
// import commonjs from '@rollup/plugin-commonjs'

// const config = {
//   input: 'src/index.js',
//   output: {
//     dir: 'output',
//     // format: 'esm'
//     format: 'cjs'
//   },
//   plugins: [
//     commonjs(),
//     babel({ babelHelpers: 'bundled' })
//   ]
// }

// export default config;

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import pkg from './package.json'

  // browser-friendly UMD build
export default [
  {
    input: 'src/index.js',
    output: {
      name: 'bach-js',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      json(),
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**'],
        babelHelpers: 'bundled'
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify 
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: ['ajv', 'bach-cljs', 'bach-json-schema', 'teoria'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      json(),
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
]
