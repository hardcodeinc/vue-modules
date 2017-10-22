// state
const state = {
  dark: true,
  clippedLeft: true,
  miniVariant: false,
  showSidebar: true
}

// getters
const getters = {
  dark: state => state.dark
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
