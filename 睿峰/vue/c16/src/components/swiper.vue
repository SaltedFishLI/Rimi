<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>START</swiper-slide>
        <swiper-slide><img src="../img/QQ图片20180718104228.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../img/eb2c593b9b4c33b71c2f2a3474647a04.png" alt=""></swiper-slide>
        <swiper-slide><img src="../img/3489d2586574954e28fd29e01ba1b9de.jpeg" alt=""></swiper-slide>
        <swiper-slide><img src="../img/u=3989214143,903107802&fm=21&gp=0.jpg" alt=""></swiper-slide>
        <swiper-slide>END</swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'Swiper',
    components: {
        swiper,
        swiperSlide
    },
    data() {
      return {
        swiperOption: {
            loop: true,
            pagination: ".swiper-pagination",
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
<style scoped>
img {
    width: 30%;
    height: 350px;
}
</style>
