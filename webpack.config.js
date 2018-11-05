const webpack = require('webpack');

module.exports = {
  entry: {
    'name-string-tmp': './src/name-string-tmp',
    'name-string': './src/name-string',
    'name-variable-tmp': './src/name-variable-tmp',
    'name-variable': './src/name-variable'
  },
  mode: 'none',
  plugins: [
    new webpack.DefinePlugin({
      NAME_STRING: '"foobar"',
      NAME_VARIABLE: 'foobar'
    })
  ]
}