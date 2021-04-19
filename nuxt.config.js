export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  mode: 'spa',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hey-challenge',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/common.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { 
      src: '@/plugins/vue-mavon-editor', 
      srr: false 
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/css/variable.scss'
    ]
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
