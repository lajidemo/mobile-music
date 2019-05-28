const baseUrl = 'c:\\Users\\Administrator\\Desktop\\mobileMusic\\mobile-music\\src\\'
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@router': baseUrl + 'router',
        '@store': baseUrl + 'store',
        '@components': baseUrl + 'components',
        '@assets': baseUrl + 'assets'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://c.y.qq.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // rewrite path
        }
      },
      '/API': {
        target: 'https://u.y.qq.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/API': '' // rewrite path
        }
      }
    }
  }
}
