// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'jquery'
import router from './router'
import store from './store'
import iView from 'iview'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/css/normalnize.css'
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import {
  InputNumber,
  Button,
  Input,
  Tabs,
  TabPane,
  Radio,
  RadioGroup,
  RadioButton,
} from 'element-ui';
import './assets/key'
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(iView)
Vue.use(VueAwesomeSwiper)
Vue.use(Button)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(InputNumber)
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
        //to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
        if(to.path === '/mine') { next() } // 如果即将进入登录路由，则直接放行
         else {   //进入的不是登录路由
             if(to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {next({ path: '/mine' })}
           //下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
           else { next() }}
          //如果不需要登录验证，或者已经登录成功，则直接放行
    })

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
