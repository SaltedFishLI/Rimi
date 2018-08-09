<template>
  <div id="app">
   <MENU/>
   <router-view></router-view>
  </div>
</template>

<script>
import MENU from './components/menulist'

export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  components:{
    MENU,
  }
}
</script>

<style>
#app{
  height: 600px;
}
 *{
      padding: 0;
      margin: 0;
}
a{
    text-decoration: none;
    color: #333;
    font-size: 18px;
     
}

.content{
  text-align: center;
  overflow: hidden;
}
h1{
   padding: 18px 20px;
  background: rgb(88, 226, 226);
  font-size: 26px;
  font-weight: 400;
}
img{
  width: 100%;
  height: 100%;
}
</style>
