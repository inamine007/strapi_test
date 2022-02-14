export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - MY PORTFOLIO',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/utils.js'},
  ],

  publicRuntimeConfig: {
    baseUrl: process.env.BASEURL || 'http://localhost:1337',
  },

  privateRuntimeConfig: {
    
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit'
  ],

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337/api',
    prefix: '/api',
    version: 'v4'
  },

  markdownit: {
    injected: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
