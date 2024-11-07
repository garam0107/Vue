<template>
  <div>
    <p>{{myMsg}}</p>
    <p>{{dynamicProps}}</p>
    <ParentGrandChild 
    :my-msg = "myMsg"
    @update-name="updateName"
    />
    <div>
      <button @click = "buttonClick">클릭</button>
      <button @click = "serveArgs">추가 인자 전달</button>
    </div>

  </div>
</template>

<script setup>
import ParentGrandChild from '@/components/ParentGrandChild.vue'

defineProps({
  myMsg: String,
  dynamicProps: String,
})
// emit 이벤트 선언
const emit = defineEmits(['someEvent', 'emitArgs', 'updateName'])
const buttonClick = () => {
  emit('someEvent')
}
const serveArgs = () => {
  emit('emitArgs', 1,2,3)
}
const updateName = () => {
  emit('updateName')
}
</script>

<style scoped>

</style>
