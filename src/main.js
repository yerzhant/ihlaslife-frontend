import './plugins/vuetify'
import Axios from 'axios'

import Vue from 'vue'
import router from './router'
// import store from './store'
import './registerServiceWorker'

import './filters/formatNumber'

import App from './App.vue'

import './styles/main.scss'

Vue.config.productionTip = false

Vue.prototype.$http = Axios.create({
  baseURL: '/api'
})

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')