import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
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
      // format: 'iife',
      // format: 'esm',
      format: 'esm',
      // format: 'cjs',
      // LAST (works, but wut)
      // form: 'esm',
      esModule: false,
      exports: 'named',
      sourcemap: true,
      // plugins: [getBabelOutputPlugin({
      //   presets: [['@babel/preset-env', { modules: 'umd' }]],
      //   plugins: [['@babel/plugin-transform-runtime', { corejs: 3, useESModules: false }]]
      // })]
    },
    plugins: [
      json(),
      resolve(),
      // commonjs(),
      commonjs({
        esmExternals: true, //['bach-cljs']
        // esmExternals: false, //['bach-cljs']
        requireReturnsDefault: true
      }),
      getBabelOutputPlugin({
        // presets: ['@babel/preset-env'],
        presets: [['@babel/preset-env', { modules: 'umd' }]],
        plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
      }),
      // babel({
      //   // exclude: ['node_modules/**'],
      //   // babelHelpers: 'bundled'

      //   // LAST
      //   exclude: '**/node_modules/**',
      //   babelHelpers: 'runtime',

      //   // exclude: '**/node_modules/**',
      //   // babelHelpers: 'bundled'
      // })
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
    // external: [/@babel\/runtime/, 'ajv', 'teoria'],
    // external: ['ajv', 'teoria'],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        plugins: [getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          plugins: [['@babel/plugin-transform-runtime', { corejs: 3, useESModules: false }]]
        })]
      }, // exports: 'named', sourcemap: true },
      {
        file: pkg.module,
        format: 'esm',
        plugins: [getBabelOutputPlugin({
          // presets: ['@babel/preset-env'],
          presets: [['@babel/preset-env', { modules: 'umd' }]],
          plugins: [['@babel/plugin-transform-runtime', { corejs: 3, useESModules: true }]]
        })]
      } // exports: 'named', sourcemap: true }
    ],
    plugins: [
      json(),
      resolve(),
      // babel({
      //   exclude: ['node_modules/**'],
      //   babelHelpers: 'runtime'
      // })
    ]
  }
]
