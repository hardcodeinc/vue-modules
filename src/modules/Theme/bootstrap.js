import Vue from 'vue'
import Vuex from 'vuex'
import EnvPlugin from '../../util/env-plugin'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import router from '@/router'
import store from '@/store'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(EnvPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
