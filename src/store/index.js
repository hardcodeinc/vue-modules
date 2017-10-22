import Vue from 'vue'
import Vuex from 'vuex'
import importByFile from '../util/import-by-file'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
var modules = importByFile(require.context('../modules/', true, /\.js$/), 'Store.js', 'object')

export default new Vuex.Store({
  strict: debug,
  modules: modules
})
