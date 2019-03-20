/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    '@babel/polyfill', 
    path.resolve(__dirname, '../src/client/index.js')
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.s?css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name][hash].[ext]'
        }
      }]
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts'
        }
      }]
    }]
  }, 
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules'
    ],
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name]_[id].css'
    }),
    new HtmlPlugin({
      title: 'Boilerplate',
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
};
