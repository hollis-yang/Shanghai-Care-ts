import { createRouter, createWebHashHistory } from 'vue-router'
import Screen from '@/views/Screen/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/screen'
    },
    {
      name: 'screen',
      path: '/screen',
      component: Screen
    }
  ]
})

export default router