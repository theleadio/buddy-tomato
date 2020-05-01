// import firebase from 'firebase/app';
// import 'firebase/database'

const firebaseConfig = process.env.ENVIRONMENT === "PROD"? process.env.FIREBASE_CRENDETIAL: process.env.FIREBASE_DEV_CRED

// if (!firebase.apps.length) {
//   firebase.initializeApp(JSON.parse(firebaseConfig))
// }

// export const fireDb = firebase.database() // --> This alone throws the error mesage.

export default {
  generate: {
    fallback: true
  },
  
  // hooks: {
  //   build: {
  //     done(builder) {
  //       fireDb.goOffline()
  //     }
  //   }
  // },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    [
      '@nuxtjs/firebase',
      {
        config: JSON.parse(firebaseConfig),
        services: {
          realtimeDb: false, // Just as example. Can be any other service.
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChanged',
              // onAuthStateChangedMutation: 'onAuthStateChangedMutation',
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
]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
