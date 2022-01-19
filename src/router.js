import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Favorite from './views/Favorite.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
    },
  ],
})
