import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#F28C17',
    secondary: '#643289',
    accent: '#47E676'
  },
  // customProperties: true,
  iconfont: 'mdi',
})
