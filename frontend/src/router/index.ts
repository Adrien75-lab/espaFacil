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
    { path: '/difficult',       name: 'difficult',        component: () => import('@/views/DifficultView.vue') },
    { path: '/sentence-builder', name: 'sentence-builder', component: () => import('@/views/SentenceBuilderView.vue') },
    { path: '/dictee',           name: 'dictee',           component: () => import('@/views/DicteeView.vue') },
    { path: '/paires',           name: 'paires',           component: () => import('@/views/PairesView.vue') },
    { path: '/dialogue', name: 'dialogue', component: () => import('@/views/DialogueView.vue') },
    { path: '/anagram', name: 'anagram', component: () => import('@/views/AnagramView.vue') },
    { path: '/leaderboard', name: 'leaderboard', component: () => import('@/views/LeaderboardView.vue') },
    { path: '/survival',   name: 'survival',   component: () => import('@/views/SurvivalView.vue') },
    { path: '/voyage',     name: 'voyage',     component: () => import('@/views/VoyageView.vue') },
    { path: '/stories',      name: 'stories',      component: () => import('@/views/StoryView.vue') },
    { path: '/conjugaison',  name: 'conjugaison',  component: () => import('@/views/ConjugationView.vue') },
  ]
})

export default router
