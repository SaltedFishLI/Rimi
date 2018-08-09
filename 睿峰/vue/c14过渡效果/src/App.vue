<template>
  <div id="app">
      <ul class="menu-list">
        <li data-page="News" @click="btnClick">新闻</li>
        <li data-page="Home" @click="btnClick">主页</li>
        <li data-page="About" @click="btnClick">关于</li>
      </ul>
      <div class="container">
        <transition name="slide" mode="out-in">
          <component :is="page"></component>
        </transition>
      </div>
      <!-- <router-view/> -->
  </div>
</template>

<script>
import News from './components/news'
import Home from './components/home'
import About from './components/about'

export default {
  name: 'App',
  data(){
    return{
      page:'Home'
    }
  },
  components:{
    About,
    Home,
    News
  },
  methods:{
    btnClick(e){
      this.page=e.target.dataset.page
    }
  }
}
</script>

<style>
.container{
  width: 300px;
  height: 100px;
  position: relative;
}
.menu-list{
  list-style: none;
  padding: 0;
}
.menu-list li{
  display: inline;
  cursor: pointer;
}
.menu-list li:hover{
  text-decoration: underline
}
.content{
  width: 300px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px;
  box-sizing: border-box
}
.slide-enter-active,
  .slide-leave-active {
    transition: all .5s linear;
  }

  .slide-leave,
  .slide-enter-to {
    transform: translate(0);
    color: #000;
  }

  .slide-leave-to,
  .slide-enter {
    transform: translate(200px);
    color: blue;
  }
</style>
