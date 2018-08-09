<template>
  <div>
    <img v-lazy="imgObj" />
  </div>
</template>

<script>
  export default {
    name: 'Lazyload',
    data() {
      return {
        // 引入图片，如果实在js中，必须require进来
        imgObj: {
          src: 'http://img4.imgtn.bdimg.com/it/u=2277775415,1609796789&fm=27&gp=0.jpg',
          error: require('../img/3518cd9d97b680d06c59fb865ab0f1ca.gif'),
          loading: require('../img/63e9e418ad66331632aa855a39c61d80.gif')
        }
      }
    }
  }
</script>

<style scoped>

</style>
