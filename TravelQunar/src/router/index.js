import Vue from 'vue'
import Router from 'vue-router'
import Home from '../common/Home/index'
import List from '../common/List/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
