<template>
  <div id="app">
    <!-- 内容 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

}
.container{
  height: 100%;
}
.content{
  height: calc(100% - 49px - 64px);
  overflow-y: scroll;
}
</style>
