require('dotenv').config()
const firebaseConfig = process.env.ENVIRONMENT === "PROD"? process.env.FIREBASE_CREDENTIAL: process.env.FIREBASE_DEV_CRED

export default {
  generate: {
    fallback: true
  },
  components: true,
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
      // Facebook / Open Graph
      { hid: 'og:title', name: 'og:title', content: 'Focus - Pomodoro Time Management' },
      { hid: 'og:image', property: 'og:image', content:"https://focus.thelead.io/img/focus_landing.png" },
      { hid: 'og:url', property: 'og:url', content:"https://focus.thelead.io" },
      { hid: 'og:type', property: 'og:type', content:"website" },
      { hid: 'og:description', property: 'og:description', content:"Time management for your daily task" },

      // Twotter
      { hid: 'twitter:title', name: 'twitter:title', content: 'Focus - Pomodoro Time Management' },
      { hid: 'twitter:image', property: 'twitter:image', content:"https://focus.thelead.io/img/focus_landing.png" },
      { hid: 'twitter:url', property: 'twitter:url', content:"https://focus.thelead.io" },
      { hid: 'twitter:card', property: 'twitter:card', content:"summary_large_image" },
      { hid: 'twitter:description', property: 'twitter:description', content:"Time management for your daily task" }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1', rel: 'stylesheet',  type:"text/css"},
      { href: 'https://fonts.googleapis.com/css?family=Poppins:100|Poppins:200|Poppins:300|Poppins:400|Poppins:500|Poppins:600|Poppins:700|Poppins:800|Poppins:900', rel: 'stylesheet'}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.slim.min.js', type: 'text/javascript' },
      { src: 'https://kit.fontawesome.com/48d20e9c42.js', crossorigin: 'anonymous', type:'text/javascript'}
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
  ],
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
