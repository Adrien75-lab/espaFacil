import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',      name: 'home', component: HomeView },
    { path: '/quiz',       name: 'quiz',       component: () => import('@/views/QuizView.vue') },
    { path: '/cards',      name: 'cards',      component: () => import('@/views/CardsView.vue') },
    { path: '/fill-blank', name: 'fill-blank', component: () => import('@/views/FillBlankView.vue') },
    { path: '/learn',      name: 'learn',      component: () => import('@/views/LearnView.vue') },
  ]
})

export default router
