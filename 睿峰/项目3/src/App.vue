<template>
  <div id="app">
    <router-view />
  <TabBar v-show="this.$store.state.isShowTar"/>
  </div>
</template>

<script>
  import TabBar from './components/tabbar'
  import store from './store'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
  TabBar
    },
    watch:{
      $route(to,from){
        if (to.name == 'details') {
          this.$store.commit('changeIsShowTar',false)
        }else{
          this.$store.commit('changeIsShowTar',true)
        }
      }
    }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.container{
  height: calc(100% - 49px);
}
.content{
  overflow-y: scroll;
}


</style>
