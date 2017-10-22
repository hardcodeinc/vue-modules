<template lang="pug">
  .main-layout
    sidebar
    appbar
    main
      v-content
        v-fade-transition(mode="out-in")
          router-view
</template>

<script>
  import Sidebar from './Sidebar'
  import Appbar from './Appbar'

  export default {
    components: {
      Sidebar,
      Appbar
    }
  }
</script>
