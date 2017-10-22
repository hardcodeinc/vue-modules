<template lang="pug">
  v-footer(
    :fixed="$store.getters.footerFixed"
  )
    v-spacer
    div {{ $env('appTitle') }} © {{ new Date().getFullYear() }} - All rights reserved
</template>
