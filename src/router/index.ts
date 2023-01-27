import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/products-list',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsList.vue')
  },
  {
    path: '/product/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetails.vue')
  },
  {
    path: '/profile',
    name: 'profile',

    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
