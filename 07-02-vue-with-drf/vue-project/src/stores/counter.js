import { ref, computed, initCustomFormatter } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'
export const useCounterStore = defineStore('counter', () => {
  const token = ref(null)
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const router = useRouter()
  const isLogin = computed(() => {
    if (token.value === null) {
      return false
    } else {
      return true
    }
  })



  // DRF로 전체 게시글 요청을 보내고 응답을 받아 articles에 저장하는 함수
  const getArticles = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles/`,
      headers: {
        Authorization : `Token ${token.value}`
      },
    })
      .then((res) => {
        // console.log(res.data)
        articles.value = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const signUp = (payload) => {
    const username = payload.username
    const password1 = payload.password1
    const password2 = payload.password2
    // 구조분해할당으로 간결하게 
    // const {username,password1,password2} = payload
    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        // 키랑 밸류 값의 이름이 똑같기 때문에 단축 표현 가능
        username,password1,password2
      }
    })
      .then((res) => {
        // console.log(res)
        console.log('회원가입 성공')
        const password = password1
        logIn({username,password})
      })
      .catch((err) => {
        console.log(err)
      })
  }



  const logIn = (payload) => {
    const username = payload.username
    const password = payload.password

    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username,password
      }
    })
      .then((res) => {
        // console.log(res.data)
        console.log('로그인 성공')
        token.value = res.data.key
        router.push({name: 'ArticleView'})
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  return {
    articles, API_URL,token,isLogin,
    getArticles, signUp,logIn
  }
}, { persist: true })
