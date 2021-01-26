export default {
  env: {
    // baseUrl: 'https://trusting-fog-55555.pktriot.net/api/',
  },

  // server: {
  //   port: 8500, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Prevaa Official' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/jpg', href: '/logo_prevaa.jpg' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    'static/font-web-site.css',
    'static/font-customize.css',
    'static/font-customize2.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/vue-zoom-on-hover'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-i18n'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'userLoggedin' },
          user: { url: 'auth/me', method: 'post', propertyName: 'user' },
          logout: { url: 'auth/logout', method: 'post' }
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/profile'
    }
  },

  i18n: {
    locales: ['en', 'th'],  // 2 languages
    defaultLocale: 'th',  // default language
    detectBrowserLanguage: false,
    vueI18n: {
      messages: {
        en: require("./static/lang/en.json"),
        th: require("./static/lang/th.json")
      }
    },
    strategy: "no_prefix"
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: 'https://trusting-fog-5555.pktriot.net/api/',
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */ 
  build: {
    optimization: { minimize: false },
  }
}
