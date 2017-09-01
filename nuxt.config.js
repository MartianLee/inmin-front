const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '국민재판',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '국민 여러분이 직접 재판하세요!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'font-awesome/css/font-awesome.css',
    'vue-multiselect/dist/vue-multiselect.min.css'
  ],
  plugins: [
    '~plugins/bootstrap.js',
    '~plugins/admin-lte.js',
    '~plugins/vue-data-tables.js',
    '~plugins/vue-social-sharing.js',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['jquery', 'bootstrap', 'axios', 'vue-social-sharing'],
    plugins: [
      new Dotenv({
        path: '.env',
        systemvars: true
      }),
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    // serverMiddleware: [
    //   // body-parser middleware
    //   bodyParser.json(),
    //   // session middleware
    //   session({
    //     secret: 'super-secret-key',
    //     resave: false,
    //     saveUninitialized: false,
    //     cookie: { maxAge: 60000 }
    //   }),
    //   // Api middleware
    //   // We add /api/login & /api/logout routes
    //   '~/api'
    // ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.node = {
          fs: 'empty',
          net: 'empty',
          tls: 'empty'
        }
      }
    }
  }
}
