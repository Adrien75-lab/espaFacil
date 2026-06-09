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
    { path: '/login',      name: 'login',      component: () => import('@/views/LoginView.vue') },
    { path: '/register',   name: 'register',   component: () => import('@/views/RegisterView.vue') },
    { path: '/profile',    name: 'profile',    component: () => import('@/views/ProfileView.vue') },
    { path: '/listen',     name: 'listen',     component: () => import('@/views/ListenView.vue') },
    { path: '/speak',      name: 'speak',      component: () => import('@/views/SpeakView.vue') },
    { path: '/review',     name: 'review',     component: () => import('@/views/ReviewView.vue') },
    { path: '/difficult',  name: 'difficult',  component: () => import('@/views/DifficultView.vue') },
  ]
})

export default router
