<template lang="pug">
  .main-layout
    sidebar
    app-bar
    main
      v-content
        .pl-3.pr-3.pt-4
          v-slide-y-transition(mode="out-in")
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
