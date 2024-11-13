import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([])
  //실제로는 articles가 빈 배열로 되어있고 drf한테 전체 게시글을 달라는 함수를 하나 만들어야한다.
  const API_URL = 'http://127.0.0.1:8000'
  // DRF로 전체 게시글 요청을 보내고 응답을 받아 articles배열에 저장하는 함수
  const getArticles = () => {
    axios({
      method: 'get',
      url : `${API_URL}/api/v1/articles/`
    })
      .then(res => {
        articles.value = res.data
      })
      .catch(err => console.log(err))
  }

  return { 
    articles, API_URL,
    getArticles
  }
}, { persist: true })
