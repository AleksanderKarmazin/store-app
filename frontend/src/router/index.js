import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthRouterService from './auth.component'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    meta:{layout: 'blank-auth'},
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/home',
    name: 'homePage',
    meta:{layout: 'blank'},
    component: () => import('../views/HomePage.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/login',
    name: 'login',
    meta:{layout: 'blank-auth'},
    // component: () => import('../views/Login.vue')
    component: () => import('../views/auth/Login.vue')
  }, 
  {
    path: '/login2',
    name: 'login2',
    meta:{layout: 'blank'},
    component: () => import('../views/auth/LogReg.vue')
  }, 
  {
    path: '/registration',
    name: 'registration',
    meta:{layout: 'blank-auth'},
    component: () => import('../views/auth/Registration.vue')
  },
  {
    path: '/catigories',
    name: 'catigories',
    meta:{layout: 'main'},
    component: () => import('../views/Catigories.vue'),
    //Первый вариант защиты роутов beforeEnter
    beforeEnter: AuthRouterService
  },

  {
    path: '/record',
    name: 'record',
    meta:{layout: 'main'},
    component: () => import('../views/Record.vue'),
    beforeEnter: AuthRouterService
    
  },
  {
    path: '/profile',
    name: 'profile',
    meta:{layout: 'main'},
    component: () => import('../views/Profile.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/planning',
    name: 'planning',
    meta:{layout: 'main'},
    component: () => import('../views/Planning.vue'),
    beforeEnter: AuthRouterService
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   meta:{layout: 'main2'},
  //   component: () => import('../views/HomePage.vue'),
  //   beforeEnter: AuthRouterService
  // },
  {
    path: '/history',
    name: 'history',
    meta:{layout: 'main'},
    component: () => import('../views/History.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/detail-record/:id',
    name: 'detail-record',
    meta:{layout: 'main'},
    component: () => import('../views/Detail-Record.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/theme',
    name: 'Theme',
    meta:{layout: 'main'},
    component: () => import('../views/Theme.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/notifications',
    name: 'Notifications',
    meta:{layout: 'main'},
    component: () => import('../views/Notifications.vue'),
    beforeEnter: AuthRouterService
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
