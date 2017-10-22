module.exports = {
  install: function (Vue) {
    var config = require('../../.env.js').default

    Vue.prototype.$env = function (key) {
      return config[key] || ''
    }
  }
}
