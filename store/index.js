import Vuex from 'vuex'

import judge from './judge'

const createStore = () => {
  return new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
      }
    },
    getters: {
    },
    judge
  })
}

export default createStore
