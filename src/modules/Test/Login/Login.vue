<template lang="pug">
  main.login
    .background(
      :class="$colorClass('loginPage')"
    )
    .box
      .logo
        img(src="/static/logo.png")
      v-card.elevation-3.white
        v-toolbar.elevation-0
          v-toolbar-title {{ $env.appTitle }}
        v-alert.ma-0(error :value="error") {{ errorText }}
        v-divider
        form#form-login(@submit.prevent="login()")
          v-card-text
            v-text-field(
              required
              label="E-mail"
              v-model="user.email"
            )
            v-text-field(
              required
              label="Senha"
              ref="password"
              type="password"
              v-model="user.password"
            )
            v-layout(align-center justify-end)
              v-flex
                v-btn.ma-0.pa-0(flat) Esqueci minha senha
                  v-icon(keyboard_arrow_down)
              v-btn(
                fab
                dark
                right
                bottom
                absolute
                type="submit"
                :class="$colorClass('loginPage')"
              )
                v-icon chevron_right
</template>
<script>
export default {
  data () {
    return {
      error: false,
      errorText: '',
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      localStorage.setItem('authorization', 'Bearer ' + 'token from api')
      let rollbackUri = localStorage.getItem('rollback-uri')
      this.$router.replace(rollbackUri || '/')
    }
  }
}
</script>

<style lang="stylus">
.login
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  overflow hidden

  .background
    position  absolute
    top 0
    bottom 50%
    left 0
    right 0

  .box
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 400px
    margin-top -45px

    .logo
      text-align center

      img
        height 150px
</style>
