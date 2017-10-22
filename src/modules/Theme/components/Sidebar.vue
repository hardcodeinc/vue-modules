<template lang="pug">
  v-navigation-drawer(
    app
    persistent
    enable-resize-watcher
    v-model="$store.state.theme.showSidebar"
    :clipped="$store.state.theme.clippedLeft"
    :mini-variant="$store.state.theme.miniVariant"
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
        show: true
      }
    }
  }
</script>
