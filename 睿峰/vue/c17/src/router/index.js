import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '@/components/pages/home'
import Shopcar from '@/components/pages/shopcar'
import Mine from '@/components/pages/mine'
import Search from '@/components/pages/search'
import Details from '@/components/pages/details'
Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        store.commit('changeLeft','0')
        store.commit('changeTitle', '主页');
        next();
      }
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle', '购物车');
        store.commit('changeLeft','50%')
        next();
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      beforeEnter: (to, from, next) => {
        store.commit('changeLeft','75%')
        store.commit('changeTitle', '我的');
        next();
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      beforeEnter: (to, from, next) => {
        store.commit('changeLeft','25%')
        store.commit('changeTitle', '搜索');
        next();
      }
    },
    {
      path: '/details/:msg',
      name: 'Details',
      component: Details,
      beforeEnter: (to, from, next) => {
        store.commit('changeTitle', '详情页');
        next();
      }
    }
  ]
})
router.beforeEach((to,from,next)=> {
      switch(to.name){
        case 'Home':{
          // this.$store.state.title = "主页"
          store.commit('changeTitle', '主页')
        }break;
        case 'Search':{

          store.commit('changeTitle', '搜索')
        }break;
        case 'Shopcar':{
          // this.$store.state.title = "购物车"
          store.commit('changeTitle', '购物车')
        }break;
        case 'Mine':{
          // this.$store.state.title = "个人"
          store.commit('changeTitle', '个人')
        }break;
      }

  next();
});
export default router;
