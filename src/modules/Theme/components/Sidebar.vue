<template lang="pug">
  v-navigation-drawer(
    app
    persistent
    v-model="show"
    :clipped="clipped"
    enable-resize-watcher
    :mini-variant="miniVariant"
  )
    v-list(dense)
      v-list-tile
        v-list-tile-action
          v-icon menu
        v-list-tile-content
          v-list-tile-title Teste
</template>

<script>
  export default {
    data () {
      return {
        show: true,
        miniVariant: false,
        clipped: true
      }
    }
  }
</script>
