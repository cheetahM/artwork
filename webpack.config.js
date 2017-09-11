const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./src/js/app.js'],
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;