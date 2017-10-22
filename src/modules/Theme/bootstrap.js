import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import EnvPlugin from '../../util/env-plugin'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(EnvPlugin)

Vue.config.productionTip = false

export default Vue
