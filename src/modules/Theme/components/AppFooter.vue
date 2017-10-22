<template lang="pug">
  v-footer(
    :class="$colorClass('footer')"
    :fixed="$store.getters.footerFixed"
  )
    v-spacer
    div(:class="$colorClass('footer') + '-color'") {{ $env.appTitle }} © {{ new Date().getFullYear() }} - All rights reserved
</template>
