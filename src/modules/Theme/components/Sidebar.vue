<template lang="pug">
  v-navigation-drawer(
    app
    persistent
    enable-resize-watcher
    v-model="show"
    :clipped="$store.getters.clippedLeft"
    :mini-variant="$store.getters.miniVariant"
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
        show: this.showSidebar
      }
    },
    watch: {
      '$store.getters.showSidebar' () {
        this.show = this.$store.getters.showSidebar
      }
    }
  }
</script>
