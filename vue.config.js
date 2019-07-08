module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  devServer: {
    port: 8888
  },
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].VUE_APP_BASE_URL = JSON.stringify(process.env.VUE_APP_BASE_URL)
      return args
    })
  }
}
