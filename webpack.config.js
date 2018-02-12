'use strict'

var path = require('path')
var ExtractPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = 'development'
var reactScriptsConfig = require('react-scripts/config/webpack.config.dev')
module.exports = Object.assign({}, reactScriptsConfig, {
  plugins: reactScriptsConfig.plugins.filter((plugin, index) => index !== 3),
  entry: reactScriptsConfig.entry.filter(entry => !entry.includes('react-dev-utils/webpackHotDevClient.js'))
})
"watch": "webpack --progress --watch",
"build:dev": "webpack --progress"
module.exports = {
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    library: 'ReactRangeslider',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  },

  plugins: [new ExtractPlugin('RangeSlider.css')],

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
}
