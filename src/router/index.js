import Vue from 'vue'
import Router from 'vue-router'
import importByFile from '../util/import-by-file'

Vue.use(Router)

var routes = importByFile(require.context('../modules/', true, /\.js$/), 'Router.js')
console.log(routes)

export default new Router({
  routes: routes
})
