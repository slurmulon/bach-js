import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import pkg from './package.json'

// browser-friendly UMD build
export default [
  {
    input: 'src/index.js',
    output: {
      name: 'bach-js',
      file: pkg.browser,
      // format: 'umd',
      format: 'esm',
      esModule: false,
      exports: 'named',
      sourcemap: true
    },
    plugins: [
      json(),
      resolve(),
      commonjs({
        ignore: ['bach-cljs'],
        esmExternals: true,
        requireReturnsDefault: true
      }),
      getBabelOutputPlugin({
        presets: [['@babel/preset-env', { modules: 'umd' }]],
        plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
      }),
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
    external: [/@babel\/runtime/, 'ajv', 'bach-cljs', 'bach-json-schema', 'teoria'],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        plugins: [getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          plugins: [['@babel/plugin-transform-runtime', { corejs: 3, useESModules: false }]]
        })]
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        plugins: [getBabelOutputPlugin({
          presets: [['@babel/preset-env', { modules: 'umd' }]],
          plugins: [['@babel/plugin-transform-runtime', { corejs: 3, useESModules: true }]]
        })]
      }
    ],
    plugins: [
      json(),
      resolve()
    ]
  }
]
