var env = require('../../../.env.js').default

// state
const state = env.theme || {
  dark: false,
  clippedLeft: true,
  miniVariant: false,
  showSidebar: true
}

// getters
const getters = {
  dark: state => state.dark,
  clippedLeft: state => state.clippedLeft,
  miniVariant: state => state.miniVariant,
  showSidebar: state => state.showSidebar
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
