<template>
  <div>
    <h1>UserView</h1>
    <RouterLink :to= "{name : 'user-profile'}">Profile</RouterLink>
    <RouterLink :to= "{name : 'user-posts'}">Posts</RouterLink>
    <h2>{{userId}}번 User 페이지</h2>
    <button @click="goHome">홈으로!</button>
    <button @click="routeUpdate">100번 유저 페이지로!</button>
    <hr>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  useRoute, RouterLink, RouterView, useRouter,
  onBeforeRouteLeave,onBeforeRouteUpdate
} from 'vue-router'


const route = useRoute()
const userId = ref(route.params.id)
const router = useRouter()
const goHome = () => {
  router.push({name:'home'})
}
onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('정말 떠나실 건가요?')
  if (answer === false) {
    return false
  }
})
const routeUpdate = () => {
  router.push({ name: 'user', params: { id: 100 } })

}

onBeforeRouteUpdate((to, from) => {
  userId.value = to.params.id
})
</script>