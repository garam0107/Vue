<script setup>
import TodoList from './components/TodoList.vue';
import TodoForm from './components/TodoForm.vue';
import { useCounterStore } from './stores/counter';

const store = useCounterStore()
</script>

<template>
<div>
  <h1>Todo Project</h1>
  <h2>완료된 할 일의 개수: {{store.doneTodosCount}}</h2>
  <TodoList />
  <TodoForm />

</div>

</template>

<style scoped>

</style>
