import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Userview from '../views/Userview.vue'
import UserPosts from '@/components/UserPosts.vue'
import UserProfie from '@/components/UserProfie.vue'
import LoginView from '@/views/LoginView.vue'

// const login = true

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user/:id',
      // name: 'user',
      component: Userview,
      children: [
        { path : '', name: 'user', component: UserProfie },      
        { path : 'profile', name: 'user-profile', component: UserProfie },
        { path : 'posts', name : 'user-posts', component: UserPosts},

      ],

    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      // beforeEnter: (to, from) => {
      //   if (login) {
      //     console.log('이미 로그인한 상태입니다.')
      //     return {name : 'home'}
      //   }
      // }
    }
  ],
})

// router.beforeEach((to, from) => {
//   const notLogin = false
//   if (!notLogin && to.name !== 'login') {
//     console.log('로그인이 필요합니다')
//     return {name: 'login'}
//   }
// })

export default router
