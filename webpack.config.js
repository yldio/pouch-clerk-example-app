const path = require('path');

module.exports = {
  entry: "./client/js/index.jsx",
  output: {
      path: "./client/js",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'].map(function(preset) { return require.resolve('babel-preset-' + preset)}),
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.js$/,
        include: path.resolve(__dirname, 'js/render/painter/use_program.js'),
        loader: 'transform/cacheable?brfs',
      },
    ],

    postLoaders: [{
      include: /node_modules\/mapbox-gl/,
      loader: 'transform',
      query: 'brfs'
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'webworkify': 'webworkify-webpack'
    },
  },
};