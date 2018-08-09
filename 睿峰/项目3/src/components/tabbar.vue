<template>
  <div class="tabBar">
    <div class="cursor" :style="{'left':this.$store.state.left}"></div>
    <ul class="tabBar-list">
      <li class="item" v-for="(link, index) in links" :key="index">
        <Icon class="icon" :type="type[index]" size="25" color="#fff"></Icon>
        <router-link :to="link.url">
          {{link.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>



<script>
  export default {
    name: 'TabBar',
    data() {
      return {
        left: '0',
      type: ['ios-home-outline', 'ios-search', 'ios-paper-outline', 'ios-person-outline'],
      links:[
        {title: '首页', url: '/'},
        {title: '搜索', url: '/search'},
        {title: '订单', url: '/shopping'},
        {title: '我的', url: '/logo'},
      ]
      }
    },
  }
</script>

<style scoped>
.tabBar{
  height: 49px;
  width: 100%;
  bottom: 0;
  position: fixed;
  z-index: 10;
  background: deepskyblue;
}
.cursor{
  width: 25%;
  height: 49px;
  position: absolute;
  top: 0px;
  background: rgb(119, 189, 221);
  transition: left .25s linear;
}
.tabBar-list .item{
  width: 25%;
  height: 49px;
  background: transparent;
  cursor: pointer;
  float: left;
  position: relative;
  padding: 3px 0;
}

.tabBar-list .item  a{
  color: #ffffff;
  font-size: 11px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  z-index: 1;
}
.icon{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
