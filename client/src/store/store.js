import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    articles: [],
    user: ''
  },
  mutations: {
    getArticles (state, payload) {
      state.articles = payload
    },
    getUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    getArticles (store) {
      axios.get('http://localhost:3000/api/articles')
      .then(response => {
        store.commit('getArticles', response.data)
      })
    },
    getUser (store) {
      axios.post('http://localhost:3000/userinfo', {
        token: localStorage.getItem('token')
      })
      .then(response => {
        store.commit('getUser', response.data)
      })
    }
  },
  getters: {
    articles (state) {
      return state.articles
    },
    user (state) {
      return state.user
    }
  }
})
