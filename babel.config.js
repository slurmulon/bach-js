module.exports = {
  // WORKS (with tests)
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  // presets: [['@babel/preset-env', { modules: false }]],
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
}
