import Cookies from 'js-cookie'

const defaultState = () => {
    return {
        user: {
            uid:"",
            email:"",
            displayName:"",
            imgUrl: "",
            token: "",
            refreshToken:""
        },
        isLoggedIn: false
    }
};

export const state = () => defaultState()

export const getters = {
  isAuthenticated(state){
    console.log(state)
    return state.isLoggedIn
  }
}

export const mutations = {
    resetStore: (state) => {
      console.log("resetStore")
      Object.assign(state, defaultState());
      // Cookie.remove('rt');
      },
    
    setAuthUser: (state, { authUser }) => {
        state.user = {
          uid: authUser.uid,
          email: authUser.email,
          displayName: authUser.displayName,
          imgUrl: authUser.photoURL,
          token: authUser.a.c,
          refreshToken: authUser.refreshToken
        }
        state.isLoggedIn = true
    }
}

export const actions = {
  async nuxtServerInit({ dispatch }, ctx) {
      if (this.$fireAuth === null) {
        throw 'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
      }
  
      if (ctx.$fireAuth === null) {
        throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
      }
  
      if (ctx.app.$fireAuth === null) {
        throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
      }
  
      // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'
  
      /** Get the VERIFIED authUser from the server */
      if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
        const { allClaims: claims, ...authUser } = ctx.res.locals.user
    
        console.info(
          'Auth User verified on server-side. User: ',
          authUser,
          'Claims:',
          claims
        )
  
        await dispatch('auth/onAuthStateChangedAction', {
          authUser,
          claims
        })
  
      }
    },
    onAuthStateChangedAction({ commit }, { authUser }) {
        if (!authUser) {
            commit('auth/resetStore')
            return
          }
        commit('auth/setAuthUser', { authUser })
    },
  
    checkVuexStore(ctx) {
      if (this.$fireAuth === null) {
        throw 'Vuex Store example not working - this.$fireAuth cannot be accessed.'
      }
  
      alert(
        'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
      )
      return
    }
}