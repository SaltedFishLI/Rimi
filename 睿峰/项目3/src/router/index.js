import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '@/components/page/home'
import Search from '@/components/page/search'
import ShoppingCar from '@/components/page/shopping'
import Mine from '@/components/page/mine'
import Details from '@/components/page/details'
import Logo from '@/components/page/logo'
import Axios from 'axios'

// 将axios挂载到Vue上

Vue.prototype.$axios = Axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle','主页');
        store.commit('changeLeft','0');
        next();
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle','搜索');
        store.commit('changeLeft','25%');
        next();
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingCar,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle','购物车');
        store.commit('changeLeft','50%');
        next();
      },
      meta: {  requiresAuth: true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle','个人中心');
        store.commit('changeLeft','75%');
        next();
      },
    }
,
      {
      path: '/details',
      name: 'details',
      component: Details,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle','详情页');
        next();
      }
    },
    {
      path: '/logo',
      name: 'logo',
      component: Logo,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle','个人中心');
        store.commit('changeLeft','75%');
        next();
      },
      meta: {  requiresAuth: true
      }
    }

  ]
})
