export default function (require) {
  var routes = []

  require.keys().forEach(key => {
    var externalRoute = require(key)

    if (key.indexOf('Router.js') && externalRoute.default) {
      var routerLength = externalRoute.default.length

      for (var i = 0; i < routerLength; i++) {
        routes.push(externalRoute.default[i])
      }
    }
  })

  return routes
}
