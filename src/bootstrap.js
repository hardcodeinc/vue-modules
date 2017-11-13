import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VueMoment from 'vue-moment'
import EnvPlugin from '@/util/env-plugin'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(EnvPlugin)
Vue.use(VueMoment)

axios.defaults.baseURL = 'http://5a04a506f1ec99001252849d.mockapi.io/'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

export default Vue
