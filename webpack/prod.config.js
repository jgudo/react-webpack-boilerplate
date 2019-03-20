/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      // in case you got a minified error #307, just remove uglify js
      // problems may occur when using react hooks 
      new UglifyJsPlugin()
    ]
  },
  plugins: [
    
    new workboxPlugin.GenerateSW({
      cacheId: 'boilerplate',
      swDest: 'sw.js',
      navigateFallback: '/index.html',
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});
