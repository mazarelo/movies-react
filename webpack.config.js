var path = require('path');
var webpack = require('webpack');

module.exports = {
  devServer: {
      inline: true,
      contentBase: './src',
      port: 3000
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './dev/js/index.js',
  target: 'web',
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  output: {
      path: 'src',
      filename: 'js/bundle.min.js'
  },
  plugins: [
      new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
