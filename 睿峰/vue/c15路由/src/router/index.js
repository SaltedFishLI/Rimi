import Vue from 'vue'
import Router from 'vue-router'

import HOME from '@/pages/home' 
import LIKE from '@/pages/like' 
import CENTER from '@/pages/center' 
import DYNAMIC from '@/pages/dynamic' 


Vue.use(Router)

export default new Router({
  linkActiveClass:'biu',
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: HOME
    },
    {
      path: '/like',
      name: 'LIKE',
      component: LIKE
    },
    {
      path: '/center',
      name: 'CENTER',
      component: CENTER
    },
    {
      path: '/dynamic',
      name: 'DYNAMIC',
      component: DYNAMIC
    }
  ]
})
