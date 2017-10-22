module.exports = {
  install: function (Vue) {
    Vue.prototype.$env = require('../../.env.js').default
  }
}
