const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  mode: 'universal',
  router: {
    base: '/nuxt-protected-mailto/'
  },
  render: {
    resourceHints: false
  },
  modules: [
    '@@'
  ],
  build: {
    html: {
      minify: {
        decodeEntities: false
      }
    }
  }
}
