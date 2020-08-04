'use strict'

const path = require('path');

const resolve = dir => path.join(__dirname, dir)

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

// vue.config.js
module.exports = {
  // 选项...
  publicPath: './',
  // webpack链式配置
  // chainWebpack: (config) => {
  //   resolve别名
    // config.resolve.alias.set('@', resolve('src'))
  // },
  // webpack配置
  configureWebpack: {
    name: process.env.VUE_APP_TITLE,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
