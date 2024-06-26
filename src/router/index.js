import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    {
      path:'/',
      name:'login',
      component:()=>import ('../views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/search',
      name:'search',
      component:()=> import('../views/Search.vue')
    },
    {
      path:'/liked',
      name:'liked',
      component:()=> import('../views/Liked.vue')
    },
  ]
})

export default router
