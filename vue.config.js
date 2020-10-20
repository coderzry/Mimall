module.export = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/index': {
        target: 'https://coding.www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/index': '/index'
        }
      }
    }
  }
}