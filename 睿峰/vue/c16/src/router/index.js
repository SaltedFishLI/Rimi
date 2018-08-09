import Vue from 'vue'
import Router from 'vue-router'
import Directive from '@/components/directive'
import ElementUi from '@/components/element-ui'
import Echart from '@/components/echart'
import Iview from '@/components/iview'
import Lazyload from '@/components/lazyload'
import Swiper from '@/components/swiper'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'directive',
      component: Directive
    },
    {
      path: '/element',
      name: 'element',
      component: ElementUi
    },
    {
      path: '/echart',
      name: 'echart',
      component: Echart
    },
    {
      path: '/iview',
      name: 'iview',
      component: Iview
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: Lazyload
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },
  ]
})
