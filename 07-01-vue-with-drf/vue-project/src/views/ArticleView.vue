<template>
  <div>
    <h1>Article Page</h1>
    <RouterLink :to ="{name : 'CreateView'}">
      [CREATE]
    </RouterLink>
    <ArticleList />
  </div>
</template>

<script setup>

import ArticleList from '@/components/ArticleList.vue';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()

onMounted(() => {
  store.getArticles()
})
</script>

<style>

</style>
