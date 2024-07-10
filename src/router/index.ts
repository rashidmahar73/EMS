import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView,
  RegistrationFormView,
  ConfirmedRegistrationView,
  MyRegistrationView
} from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/registrationForm',
      name: 'registrationForm',
      component: RegistrationFormView
    },
    {
      path: '/confirmedRegistration',
      name: 'confirmedRegistration',
      component: ConfirmedRegistrationView
    },
    {
      path: '/myRegistration',
      name: 'myRegistration',
      component: MyRegistrationView
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => {
    //     import('../pages/home/HomeView.vue')
    //   }
    // }
  ]
})

export default router
