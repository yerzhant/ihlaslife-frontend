import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: false,
    sideBar: false
  },
  mutations: {
    toggleMenu(state) {
      state.menu = !state.menu
    },
    toggleSideBar(state) {
      state.sideBar = !state.sideBar
    }
  },
  actions: {

  }
})