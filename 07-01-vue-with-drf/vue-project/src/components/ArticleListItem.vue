<template>
  <div>
    <ul>
      <li>{{article.title}} : {{ article.content }}</li>
    </ul>
    <RouterLink :to = "{name : 'DetailView', params :{id:article.id}}">
      [DETAIL]
    </RouterLink>
  </div>
</template>

<script setup>
defineProps({
  article : Object
})
import { RouterLink } from 'vue-router';


</script>
