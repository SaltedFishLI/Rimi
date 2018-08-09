<template>
  <div class="navgtb">
    <Icon type="ios-arrow-dropleft" v-if="goBack" class="goback-btn" @click="gobackClick" />
    <h3 class="title">{{this.$store.state.title}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'Navgtb',
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
    data() {
      return {}
    }
  }
</script>

<style scoped>
.navgtb{
  height: 64px;
  position: relative;
  background: deepskyblue;
}
.title{
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  letter-spacing: 5px;
  font-weight: normal;
}
.goback-btn{
  color: #000;
  position: absolute;
  left: 15px;
  top: 50%;
  color: white;
  transform: translateY(-50%);
}
</style>
