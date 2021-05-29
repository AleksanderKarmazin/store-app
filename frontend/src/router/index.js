import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthRouterService from './auth.component'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    meta:{layout: 'blank'},
    component: () => import('../views/public/Main.vue'),
  },
  {
    path: '/farmer',
    name: 'farmer',
    meta:{layout: 'blank'},
    component: () => import('../views/public/farmer/Farmer.vue'),
  },
  {
    path: '/consumer',
    name: 'consumer',
    meta:{layout: 'blank'},
    component: () => import('../views/public/Consumer.vue'),
  },
  {
    path: '/product-card/:id',
    name: 'product-card',
    meta:{layout: 'blank'},
    component: () => import('../views/public/ProductCard.vue'),
  },
  {
    path: '/cart/:id',
    name: 'product-card',
    meta:{layout: 'blank'},
    component: () => import('../views/public/Cart.vue'),
  },
  {
    path: '/supplier',
    name: 'suppliers',
    meta:{layout: 'blank'},
    component: () => import('../views/public/Supplier.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/home',
    name: 'homePage',
    meta:{layout: 'blank'},
    component: () => import('../views/public/HomePage.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/login',
    name: 'login',
    meta:{layout: 'blank'},
    component: () => import('../views/auth/Login.vue')
  }, 
  {
    path: '/registration',
    name: 'registration',
    meta:{layout: 'blank'},
    component: () => import('../views/auth/Registration.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{layout: 'blank'},
    component: () => import('../views/Profile.vue'),
    beforeEnter: AuthRouterService
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
