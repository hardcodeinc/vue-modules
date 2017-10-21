export default function (require) {
  var routes = []

  require.keys().forEach(key => {
    require(key).default.map(route => {
      routes.push(route)
    })
  })

  return routes
}
