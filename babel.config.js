module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  // presets: [['@babel/preset-env', { modules: false }]],
  // LAST
  plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
}
