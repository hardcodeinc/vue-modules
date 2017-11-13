import Vue from '@/bootstrap'
import '@/modules/Theme/stylus/main.styl'

import App from '@/modules/Theme/App'
import router from '@/router'
import store from '@/store'

Vue.prototype.$colorClass = (index, color) => {
  let className = Vue.prototype.$env.colors[index] || color

  if (store.getters.dark === false && typeof className !== undefined) {
    return className
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
