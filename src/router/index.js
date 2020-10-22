import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/radio',
    name: 'Radio',
    component: () => import('../views/Radio.vue')
  },
  {
    path: '/likes',
    name: 'Likes',
    component: () => import('../views/Likes.vue')
  },
  {
    path: '/singers',
    name: 'Singers',
    component: () => import('../views/Singers.vue')
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('../views/Albums.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
