import { createRouter, createWebHistory } from 'vue-router'
import store    from '../store'
import Home     from '@/views/Home.vue'
import Index    from '@/views/Index.vue'
import Map      from '@/views/Map.vue'
import Disco    from '@/views/Disco.vue'
import Girl      from '@/views/Girl.vue'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/vr-girls',
    name: 'Girl',
    component: Girl
  },
  {
    path: '/disco',
    name: 'Disco',
    component: Disco
  },
  {
    path: '/signup',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.loginRequired)) {
//     if (store.state.isAuthenticated) {
//       next()
//     } else {
//       next("/login")
//     }
//   }
//   else if (to.matched.some(record => record.meta.loginRedirecct)) {
//     if (!store.state.isAuthenticated) {
//       next()
//     } else {
//       next("/")
//     }
//   }
//   else {
//     next()
//   }
// })

export default router
