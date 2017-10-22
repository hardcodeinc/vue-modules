import Vue from './bootstrap'
import './stylus/main.styl'

import App from './App'
import router from '@/router'
import store from '@/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
