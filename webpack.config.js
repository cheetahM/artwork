const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: ['./src/js/App.js'],
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    publicPath: "/public/",
    historyApiFallback: true
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
        enforce: "pre",
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },  
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;