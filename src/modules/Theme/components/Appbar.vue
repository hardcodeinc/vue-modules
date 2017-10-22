<template lang="pug">
  v-toolbar(
    app
    fixed
    :clipped-left="clipped"
  )
    v-toolbar-side-icon
    v-btn(
      icon
      light
    )
      v-icon
    v-btn(
      icon
      light
      @click.stop="clipped = !clipped"
    )
      v-icon web
    v-btn(
      icon
      light
    )
      v-icon remove
    v-toolbar-title Title
    v-spacer
    v-btn(
      icon
      light
    )
      v-icon menu
</template>

<script>
  export default {
    data () {
      return {
        clipped: true
      }
    }
  }
</script>
