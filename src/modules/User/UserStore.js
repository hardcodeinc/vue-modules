import Vue from '@/bootstrap'

// state
const state = {
  users: [],
  requests: {}
}

// getters
const getters = {
  users: state => state.users
}

// actions
const actions = {
  getUsers: ({ commit, state }, query = {}) => {
    let request = {}
    request.name = 'getUsers'

    if (state.requests[request.name]) {
      state.requests[request.name].cancel(request.name + ' Foi cancelado')
    }

    let CancelToken = Vue.axios.CancelToken
    let source = CancelToken.source()
    request.source = source

    commit('setRequesting', request)
    return Vue.axios.get('users', {params: query, cancelToken: source.token}).then(response => {
      commit('setUsers', response.data)
      commit('removeRequesting', 'getUsers')
    }).catch((error) => {
      console.log(error)
    })
  }
}

// mutations
const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  setRequesting (state, request) {
    state.requests[request.name] = request.source
  },
  removeRequesting (state, requestName) {
    console.log('oijsad')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
