<template>
  <div>
    <div class="tabBar">
    <!-- 游标 -->
    <div class="cursor" :style="{'left':this.$store.state.left}"></div>
    <!-- 菜单 -->
    <ul class="tabBar-list">
      <li class="item" v-for="(link, index) in links" :key="index">
        <Icon :type="types[index]" size="25" color="#fff" class="icon"></Icon>
        <router-link :to="link.url">
          {{link.title}}
        </router-link>
      </li>
    </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Tabbar',
  data(){
    return {
      left:'',
      types:[
        'ios-home',
        'ios-search-strong',
        'ios-cart',
        'ios-person'
      ],
      links:[
        {title:'主页',url:'/'},
        {title:'搜索',url:'/search'},
        {title:'购物车',url:'/shopcar'},
        {title:'个人',url:'/mine'}
      ]
    }
  },

}
</script>


<style scoped>
.tabBar{
      height: 49px;
      position: relative;
      background: rgba(1, 8, 15, 0.644);
}
.cursor{
    width: 25%;
    height: 49px;
    position: absolute;
    top: 0;
    left: 0;
    transition: left .25s linear;
    background: rgba(13, 119, 240, 0.644);
}

.tabBar-list{
     height: 49px;
}
.item{
    padding: 3px 0;
    width: 25%;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    float: left;
    position: relative;
}
.item .icon{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
.item a{
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    z-index: 10;
}
</style>
