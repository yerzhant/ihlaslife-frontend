import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/accounts',
      component: () => import(/* webpackChunkName: "info" */ './views/Accounts.vue')
    },
    {
      path: '/contacts',
      component: () => import(/* webpackChunkName: "info" */ './views/Contacts.vue')
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "info" */ './views/About.vue')
    }
  ]
})
