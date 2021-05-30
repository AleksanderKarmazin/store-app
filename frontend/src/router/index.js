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
    path: '/catalog',
    name: 'Catalog',
    meta:{layout: 'blank'},
    component: () => import('../views/public/Catalog.vue'),
  },
  {
    path: '/product-card/:id',
    name: 'product-card',
    meta:{layout: 'blank'},
    component: () => import('../views/public/ProductCard.vue'),
  },
  {
    path: '/cart/:id',
    name: 'cart',
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
  //ADMIN
  {
    path: '/admin',
    name: 'admin',
    meta:{layout: 'blank'},
    component: () => import('../views/admin/adminPanel.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/dashbord',
    name: 'dashbord',
    meta:{layout: 'blank'},
    component: () => import('../views/admin/menu/Dashbord.vue'),
    beforeEnter: AuthRouterService
  },
  {
    path: '/adminProfile',
    name: 'adminProfile',
    meta:{layout: 'blank'},
    component: () => import('../views/admin/menu/AdminProfile.vue'),
    beforeEnter: AuthRouterService
  },  
  {
    path: '/userlist',
    name: 'userlist',
    meta:{layout: 'blank'},
    component: () => import('../views/admin/menu/UserList.vue'),
    beforeEnter: AuthRouterService
  },  
  {
    path: '/productlist',
    name: 'productlist',
    meta:{layout: 'blank'},
    component: () => import('../views/admin/menu/ProductList.vue'),
    beforeEnter: AuthRouterService
  },  
  {
    path: '/oderlist',
    name: 'oderlist',
    meta:{layout: 'blank'},
    component: () => import('../views/admin/menu/OderList.vue'),
    beforeEnter: AuthRouterService
  },  
  {
    path: '/settings',
    name: 'settings',
    meta:{layout: 'blank'},
    component: () => import('../views/admin/menu/Settings.vue'),
    beforeEnter: AuthRouterService
  },    
  //ADMIN 
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
