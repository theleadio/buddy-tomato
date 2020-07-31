require('dotenv').config()
const firebaseConfig = process.env.ENVIRONMENT === "PROD"? process.env.FIREBASE_CREDENTIAL: process.env.FIREBASE_DEV_CRED

export default {
  generate: {
    fallback: true
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Focus - Pomodoro Time Management',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Time management for your daily task' },
      { property: 'og:image', content:"https://focus.thelead.io/img/focus_landing.png" },
      { property: 'og:url', content:"https://focus.thelead.io" },
      { property: 'og:type', content:"website" },
      { property: 'og:description', content:"Time management for your daily task" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1', rel: 'stylesheet',  type:"text/css"}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js', type: 'text/javascript' },
      { src: 'https://kit.fontawesome.com/48d20e9c42.js', crossorigin: 'anonymous', type:'text/javascript'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/localStorage.js', ssr: false }
    { src:'~/plugins/api-factory.js'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', { path: './' }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    // 'nuxt-seo',
    [
      '@nuxtjs/firebase',
      {
        config: JSON.parse(firebaseConfig),
        services: {
          realtimeDb: false, // Just as example. Can be any other service.
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
              // onAuthStateChangedMutation: 'auth/onAuthStateChangedMutation',
            },
            ssr: true
          }
        }
      }
    ],
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
    ['vue-social-sharing/nuxt', {
      networks: {
        focuslinkedin: 'https://www.linkedin.com/shareArticle?mini=true&url=@u'
      }
    }]
    // ['cookie-universal-nuxt', { alias: 'focus-cookiz' }]
  ],
  // seo : {
  //   name : 'Focus',
  //   title : 'Focus',
  //   templateTitle : '%title%',
  //   description : 'Time management for your daily task',
  //   image : 'https://focus.thelead.io/img/focus_landing.png',
  //   author : 'Edmund Hee',
  //   keywords: ['theleadio', 'focus', 'pomodoro']
  // },
  /*
  ** Build configuration
  */
 axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:5000'
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
