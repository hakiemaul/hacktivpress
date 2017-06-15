import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Auth from '@/components/Auth'
import Create from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/registration',
      component: Auth
    },
    {
      path: '/create',
      component: Create
    }
  ]
})
