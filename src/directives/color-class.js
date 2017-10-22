Vue.directive('color-class', {
  inserted: function (index, color, el) {
    console.log(index, color)
    el.focus()
  }
})
