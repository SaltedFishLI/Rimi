<template>
  <div>
    <ul class="menu-list">
      <li v-for="(link, index) in links"  :key="index">
        <router-link exact :to="link.url">{{link.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavList',
    data() {
      return {

        links: [{
            title: '自定义指令',
            url: '/'
          },
          {
            title: 'ElmentUI',
            url: '/element'
          },
          {
            title: 'iView',
            url: '/iview'
          },
          {
            title: 'LazyLoad',
            url: '/lazyload'
          },
          {
            title: 'Swiper',
            url: '/swiper'
          },
          {
            title: 'Echarts',
            url: '/echart'
          }
        ]
      }
    }
  }
</script>

<style>
  .menu-list {
    list-style: none;
    padding: 0
  }

  .menu-list li {
    display: inline;
    padding: 0 15px
  }

  .menu-list li a {
    color: #000;
    text-decoration: none
  }

  .menu-list li a:hover {
    color: aqua;
    text-decoration: underline
  }
</style>
