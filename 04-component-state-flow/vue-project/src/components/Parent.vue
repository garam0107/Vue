<template>
  <div>
    <ParentChild 
    my-msg = "message"
    :dynamic-props = "name"
    @some-event = "someCallback"
    @emit-args = "receiveCallback"
    @update-name = "updateName"
    />
    <ParentItem 
    v-for = "item in items"
    :key = "item.id"
    :my-prop = "item"
    />
  </div>
</template>

<script setup>
import ParentChild from '@/components/ParentChild.vue'
import ParentItem from '@/components/ParentItem.vue'
import { ref } from 'vue'

const name = ref('Garam')
const items = ref([
  { id: 1, name: '사과'},
  { id: 2, name: '딸기' },
  { id: 3, name: '바나나'}

])

const someCallback = () => {
  console.log('자식 이벤트 수신')
}
const receiveCallback = (...args) => {
  console.log(args)
  console.log(`추가인자 ${args} 수신`)
}
const updateName = () => {
  name.value = "이름 변경"
}
</script>

<style scoped>

</style>
