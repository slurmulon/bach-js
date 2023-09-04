import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import pkg from './package.json'

// browser-friendly UMD build
export default [
  {
    // external: [/@babel\/runtime/, 'ajv', 'bach-cljs', 'bach-json-schema', 'teoria'],
    // external: [/@babel\/runtime/, 'bach-cljs', 'bach-json-schema', 'segu', 'teoria'],
    // NEXT (note no segu)
    external: [/@babel\/runtime/, 'bach-cljs', 'bach-json-schema', 'teoria'],
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
      // terser(),
      commonjs({
        ignore: ['bach-cljs'],
        esmExternals: true,
        requireReturnsDefault: true
      }),
      getBabelOutputPlugin({
        // presets: [['@babel/preset-env', { modules: 'umd' }]],
        presets: [['@babel/preset-env', { modules: 'umd', exclude: ['proposal-dynamic-import'] }]],

        // plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
        plugins: [['@babel/plugin-transform-runtime', { corejs: false, helpers: false, }]]
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
        plugins: [terser(), getBabelOutputPlugin({
          // presets: ['@babel/preset-env'],
          presets: [['@babel/preset-env', { modules: 'cjs', exclude: ["proposal-dynamic-import"] }]],
          // plugins: [['@babel/plugin-transform-runtime', { corejs: 3, useESModules: false }]]
          plugins: [['@babel/plugin-transform-runtime', { corejs: 3, proposals: true, regenerator: true, useESModules: false }]]
          // plugins: [['@babel/plugin-transform-runtime', { corejs: false, useESModules: false }]]
        })]
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        plugins: [terser(), getBabelOutputPlugin({
          // presets: [['@babel/preset-env', { modules: 'umd' }]],
          presets: [['@babel/preset-env', { modules: 'auto' }]],
          // plugins: [['@babel/plugin-transform-runtime', { corejs: 3, useESModules: true }]]
          plugins: [['@babel/plugin-transform-runtime', { corejs: 3, proposals: true, regenerator: true, useESModules: true }]]
          // plugins: [['@babel/plugin-transform-runtime', { corejs: false, useESModules: true }]]
        })]
      }
    ],
    plugins: [
      json(),
      resolve()
    ]
  }
]
