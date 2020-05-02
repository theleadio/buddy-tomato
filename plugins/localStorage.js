import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
        getState: (key) => Cookies.getJSON(key),
        setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })(store)
  })
}