export default function (require, sufix, type) {
  let content = type === 'object' ? {} : []

  require.keys().forEach(key => {
    let imported = require(key)

    if (key.indexOf(sufix) > 0 && imported.default) {
      if (type === 'object') {
        content[key.split('/').pop().replace(sufix, '').toLowerCase()] = imported.default
      } else {
        let routerLength = imported.default.length

        for (let i = 0; i < routerLength; i++) {
          content.push(imported.default[i])
        }
      }
    }
  })

  return content
}
