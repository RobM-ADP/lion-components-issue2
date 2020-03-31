const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LIB_PREFIX = 'adpl'
module.exports = {
  entry: {main: './main.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
        {
          test: /\.html$/, exclude: /node_modules/,
          use: {
              loader: 'file-loader'
          }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'lion webcomponent library',
      prefix: LIB_PREFIX,
      filename: 'index.html',
      template: './index.ejs',
      inject: true
    }),
    
  ],
  optimization:{
    minimize: false, // <---- disables uglify.
    splitChunks: {
      chunks: 'all'
    }
  }
};