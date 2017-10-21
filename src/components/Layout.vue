<template lang="pug">
  .main-layout
    main
      v-content
        v-fade-transition(mode="out-in")
          router-view
</template>
