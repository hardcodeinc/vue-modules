<template lang="pug">
  .main-layout
    sidebar
    app-bar
    main
      v-content
        v-fade-transition(mode="out-in")
          router-view
    app-footer
</template>

<script>
  import Sidebar from './Sidebar'
  import AppBar from './AppBar'
  import AppFooter from './AppFooter'

  export default {
    components: {
      Sidebar,
      AppBar,
      AppFooter
    }
  }
</script>
