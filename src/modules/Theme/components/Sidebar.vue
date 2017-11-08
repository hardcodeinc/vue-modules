<template lang="pug">
  v-navigation-drawer(
    app
    persistent
    enable-resize-watcher
    v-model="show"
    :class="$colorClass('sidebar')"
    :clipped="$store.getters.clippedLeft"
    :mini-variant="$store.getters.miniVariant"
  )
    .logo
      router-link(to="/")
        img(src="/static/logo.png" alt="logo")
    .welcome(
      v-if="!$store.getters.miniVariant"
    )
      h5 Welcome, John Doe!
    slot(name="menu")
      v-list
        v-list-tile(
          router
          :key="key"
          :to="item.to"
          v-for="(item, key) in menuPrincipal"
        )
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
</template>

<script>
  export default {
    data () {
      return {
        show: this.showSidebar,
        menuPrincipal: [
          {icon: 'home', title: 'Home', to: '/'},
          {icon: 'library_add', title: 'CRUD', to: '/crud'},
          {icon: 'security', title: 'Login', to: '/login'}
        ]
      }
    },
    watch: {
      '$store.getters.showSidebar' () {
        this.show = this.$store.getters.showSidebar
      }
    }
  }
</script>

<style lang="stylus">
.logo
  text-align center
  padding-top 10px

  img
    max-width 50%

.welcome
  text-align center

  h5
    font-weight bold

</style>
