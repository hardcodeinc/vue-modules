import Vue from 'vue'
import Router from 'vue-router'
import ImportRoutes from '../util/import-routes'

Vue.use(Router)

var routes = ImportRoutes(require.context('../modules/', true, /\.js$/))
console.log(routes)

export default new Router({
  routes: routes
})
