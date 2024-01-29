import { createRouter, createWebHashHistory } from 'vue-router'
import Authentication from '@/views/Authentication/index.vue'
import Login from '@/views/Authentication/Login/index.vue'
import Register from '@/views/Authentication/Register/index.vue'
import Screen from '@/views/Screen/index.vue'
import Map from '@/views/Map/index.vue'
import Nursing from '@/views/Nursing/index.vue'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/screen',
    },
    {
      path: '/auth',
      component: Authentication,
      children: [
        { path: 'login', component: Login },
        { path: 'register', component: Register },
      ],
    },
    {
      name: 'screen',
      path: '/screen',
      component: Screen,
    },
    {
      name: 'map',
      path: '/map',
      component: Map,
    },
    {
      name: 'nursing',
      path: '/nursing',
      component: Nursing,
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
    },
  ],
})

export default router
