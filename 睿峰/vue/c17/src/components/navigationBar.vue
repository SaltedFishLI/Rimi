<template>
  <div class="navigationBar">
    <Icon v-if="goBack" class="goback-btn" @click="gobackClick" type="chevron-left"></Icon>
    <h3 class="title">{{this.$store.state.title}}</h3>
  </div>
</template>


<script>
export default {
  name: 'NavigationBar',
  props:{
    goBack:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    gobackClick(){
      this.$router.go(-1)
    }
  },
  data(){
    return {
    }
  }
}
</script>


<style scoped>
.navigationBar{
  height: 64px;
  background: #333333;
  color: #ffffff;
  position: relative;
}
.title{
  text-align: center;
  line-height: 64px;
  letter-spacing: 5px;
}
.goback-btn{
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
