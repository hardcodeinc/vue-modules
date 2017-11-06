var merge = require('webpack-merge')
import Vue from './bootstrap'

// state
const state = merge({
  dark: false,
  clippedLeft: true,
  miniVariant: false,
  showSidebar: true,
  footerAbsolute: false,
  footerFixed: true
}, Vue.prototype.$env.theme)

// getters
const getters = {
  dark: state => state.dark,
  clippedLeft: state => state.clippedLeft,
  miniVariant: state => state.miniVariant,
  showSidebar: state => state.showSidebar,
  footerFixed: state => state.footerFixed
}

// actions
const actions = {
  toggle: ({ commit }, prop) => commit('toggleState', prop)
}

// mutations
const mutations = {
  toggleState (state, prop) {
    state[prop] = !state[prop]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
