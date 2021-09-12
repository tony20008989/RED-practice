import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
