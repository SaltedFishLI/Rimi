<template>
  <div id="app">
    <Menu @menuClick="tab"/>
    <component :is="curPage"></component>
  </div>
</template>

<script>

import HelloVue from './components/Hellovue'
// import Parent from './components/parent'
// import Tea from './components/tea'
import Boss from './components/boss.vue'
//动态切换
import Menu from './components/dynamic/menu'
import News from './components/dynamic/news'
import Mine from './components/dynamic/mine'
import Home from './components/dynamic/home'


  export default {
  name: 'App',
  data() {
    return {
      curPage: 'Home'
    }
  },
  methods: {
    tab(data) {
      this.curPage = data;
    }
  },
  components: {
    // HelloWorld,
    // Parent,
    // Tea,
    // Boss,
    Menu,
    Home,
    News,
    Mine
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  color:red;
}
.content {
  width: 500px;
  height: 300px;
}
</style>
