<template>
  <div>
    <form @submit.prevent = "createTodo" ref = "formElem">
      <input type="text" v-model="todoText">
      <input type="submit">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()
const todoText = ref('')
const formElem = ref(null)

const createTodo = () => {
  if (todoText.value.length !== 0) {
    store.addTodo(todoText.value)
    formElem.value.reset()
    todoText.value = ''
  } else {
    alert('메세지를 입력해주세요')
  }
  
}
</script>