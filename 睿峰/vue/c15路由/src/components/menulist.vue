<template>
    <ul class="menu-list">
        <li><router-link exact :to="menu.home">大厅</router-link></li>
        <li><router-link exact :to="menu.like">喜好</router-link></li>
        <li><router-link exact :to="menu.dynamic">动态</router-link></li>
        <li><router-link exact :to="menu.center">个人</router-link></li>
    </ul>
</template>
<script>
    export default {
        name:'MENU',
        data() {
            return {
                menu:{
                    home:"/",
                    like:"/LIKE",
                    dynamic:"/DYNAMIC",
                    center:"/CENTER"
                }
            }
        },
        components: {

        }
    }
</script>

<style scoped>
   
    .menu-list{
        width: 100%;
        list-style: none;
        font-size: 0;
        position: fixed;
        bottom: 0;
        left: 0;
    
    }
    .menu-list li {
        width: 25%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        display: inline-block;
        background: paleturquoise;
    }
    .menu-list a{
        display: block;
        width: 100%;
        height: 100%;
    }
  .biu{
      background: rgb(18, 216, 216);
  }
   
   
</style>
