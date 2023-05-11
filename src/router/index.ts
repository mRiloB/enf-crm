// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/admin',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'calendar',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'servicos',
        name: 'services',
        component: () => import(/* webpackChunkName: "services" */ '@/views/Services.vue'),
      },
      {
        path: 'inventario',
        name: 'inventario',
        component: () => import(/* webpackChunkName: "services" */ '@/views/Inventario.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
