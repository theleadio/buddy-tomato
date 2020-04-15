import firebase from 'firebase/app';
import 'firebase/database'

var firebaseConfig = {
  apiKey: 'AIzaSyDfjP5Mne6iAsR6pWNCd4-DdpanrBMDRk8',
  authDomain: 'buddy-tomato.firebaseapp.com',
  databaseURL: 'https://buddy-tomato.firebaseio.com',
  projectId: 'buddy-tomato',
  storageBucket: 'buddy-tomato.appspot.com',
  messagingSenderId: '530853447243',
  appId: '1:530853447243:web:393cad25c74cb66ae32fce',
  measurementId: 'G-JFQE7SPPB0'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const fireDb = firebase.database() // --> This alone throws the error mesage.

export default {
  generate: {
    fallback: true
  },
  
  hooks: {
    build: {
      done(builder) {
        fireDb.goOffline()
      }
    }
  },

  mode: 'spa',
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDfjP5Mne6iAsR6pWNCd4-DdpanrBMDRk8',
          authDomain: 'buddy-tomato.firebaseapp.com',
          databaseURL: 'https://buddy-tomato.firebaseio.com',
          projectId: 'buddy-tomato',
          storageBucket: 'buddy-tomato.appspot.com',
          messagingSenderId: '530853447243',
          appId: '1:530853447243:web:393cad25c74cb66ae32fce',
          measurementId: 'G-JFQE7SPPB0'
        },
        services: {
          realtimeDb: true // Just as example. Can be any other service.
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
