<template lang="pug">
  v-toolbar(
    app
    fixed
    :class="$colorClass('appBar')"
    :clipped-left="$store.getters.clippedLeft"
  )
    v-btn(
      icon
      v-if="$env.appBar.icons.showSidebar"
      @click.stop="toggle('showSidebar')"
    )
      v-icon(:class="$colorClass('appBar') + '-color'") menu
    v-btn(
      icon
      v-if="$env.appBar.icons.miniVariant"
      @click.stop="toggle('miniVariant')"
    )
      v-icon(
        :class="$colorClass('appBar') + '-color'"
        v-html="$store.getters.miniVariant ? 'chevron_right' : 'chevron_left'"
      )
    v-btn(
      icon
      v-if="$env.appBar.icons.clippedLeft"
      @click.stop="toggle('clippedLeft')"
    )
      v-icon(:class="$colorClass('appBar') + '-color'") web
    v-btn(
      icon
      v-if="$env.appBar.icons.footerFixed"
      @click.stop="toggle('footerFixed')"
    )
      v-icon(:class="$colorClass('appBar') + '-color'") remove
    v-btn(
      icon
      v-if="$env.appBar.icons.dark"
      @click="toggle('dark')"
    )
      v-icon(
        :class="$colorClass('appBar') + '-color'"
        v-html="$store.getters.dark ? 'brightness_high' : 'brightness_2'"
      )
    v-toolbar-title(:class="$colorClass('appBar') + '-color'") {{ $env.appTitle }}
    v-spacer
    v-btn(
      icon
    )
      v-icon(:class="$colorClass('appBar') + '-color'") menu
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: mapActions([
      'toggle'
    ])
  }
</script>
