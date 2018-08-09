// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button,
  Carousel,CarouselItem
} from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(iView); 
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false
Vue.component('Hello',{
  template:'<h1>Hello Chendu</h1>'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
