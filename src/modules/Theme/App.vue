<template lang="pug">
  v-app(
    :light="!$store.state.theme.dark"
    :dark="$store.state.theme.dark"
  )
    v-fade-transition(mode="out-in")
      router-view
</template>
