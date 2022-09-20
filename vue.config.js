/*
 * @Descripttion:
 * @Author: voanit
 * @Date: 2021-07-15 19:10:38
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-20 14:38:15
 */

const path = require('path')
const settings = require('./src/settings.js')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    // // // 压缩代码
    // config.optimization.minimize(true);
    // // 分割代码
    // config.optimization.splitChunks({
    //   chunks: 'all'
    // })
    // config.resolve.alias
    //     .set('@', path.join(__dirname,'src'))
    //     .set('element-ui', 'zz-element-ui')
    // config
    // .plugin('webpack-bundle-analyzer')
    // .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
    config.module
      .rule('ts')
      .test(/\.ts?$/)
      .use('ts-loader')
      .loader('ts-loader')
      .tap(option => {
        return option
      })
      .end()
    return config
  },
  publicPath: process.env.VUE_APP_ENV === 'prod' ? process.env.VUE_APP_CDN : '/',
  configureWebpack: config => {
    config.name = settings.title
    const plugins = []
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true // eslint-disable-line
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true // eslint-disable-line
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log'] // eslint-disable-line
      config.plugins = [...config.plugins, ...plugins]
    } else {
      config.devtool = 'source-map'
    }
  },

  productionSourceMap: false,

  devServer: {
    // https: true,
    disableHostCheck: true,
    port: 8100,
    proxy: {
      '^/api': {
        target: '/',
        ws: true,
        changeOrigin: true,
      },
    },
    before: require('./mock/mock-server.js'),
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/variables.scss'),
        path.resolve(__dirname, './src/styles/element-variables.scss'),
        path.resolve(__dirname, './src/styles/mixin.scss'),
      ],
    },
  },
}
