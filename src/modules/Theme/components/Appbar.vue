<template lang="pug">
  v-toolbar(
    app
    fixed
    :clipped-left="$store.state.theme.clippedLeft"
  )
    v-btn(
      icon
      @click.stop="toggle('showSidebar')"
    )
      v-icon menu
    v-btn(
      icon
      @click.stop="toggle('miniVariant')"
    )
      v-icon chevron_left
    v-btn(
      icon
      @click.stop="toggle('clippedLeft')"
    )
      v-icon web
    v-btn(
      icon
    )
      v-icon remove
    v-btn(
      icon
      @click="toggle('dark')"
    )
      v-icon(v-html="$store.state.theme.dark ? 'brightness_high' : 'brightness_2'")
    v-toolbar-title Title
    v-spacer
    v-btn(
      icon
    )
      v-icon menu
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: mapActions([
      'toggle'
    ])
  }
</script>
