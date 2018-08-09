<template>
  <div id="app">

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Counter from 'vue-lsh-counter'
import '../node_modules/vue-lsh-counter/dist/static/css/app.365cb607015a33a97199ff1825e46ac3.css'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter
  },
  methods:{
    getNum(num){
      console.log(`商品数量: ${num}`);

    }
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
</style>
