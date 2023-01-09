const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: '/Audiophile-Ecommerce-Site',
  transpileDependencies: true
})

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/Audiophile-Ecommerce-Site/'
//     : '/'
// }