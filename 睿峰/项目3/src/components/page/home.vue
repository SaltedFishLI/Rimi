<template>
  <div class="container">
    <Navgtb/>
    <div class="banner">
       <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i2/2946138504/TB1PRVqelTH8KJjy0FiXXcRsXXa_!!0-item_pic.jpg_760x760Q50s50.jpg" ></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i2/2946138504/TB13yE0bjihSKJjy0FeXXbJtpXa_!!0-item_pic.jpg_430x430q90.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i3/TB1kpdFPVXXXXb5XXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="https://img.alicdn.com/imgextra/i3/2946138504/TB1hWM3aSsQ2uJjSZFFXXXYUFXa_!!0-item_pic.jpg_430x430q90.jpg"></div>
        </CarouselItem>
    </Carousel>
    </div>
    <div class="headings">

    </div>
    <div class="NewProduct">
       <ul v-for="(contentlist, index) in contentlist" :key="index" >
         <li :data-pidx="index">
           <h2>{{contentlist.title}}</h2>
           <ul class="box">
        <li @click="goDetails" v-for="(newP, index) in contentlist.NewProduct" :key="index" :data-idx="index">
          <img :src="newP.imgs[0]" alt="">
          <p>￥{{newP.price}}</p>
          <h4>{{newP.title}}</h4>
        </li>
           </ul>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Navgtb from '../navgtb'

  export default {
    name: 'Home',
    data() {
      return {
        contentlist:[],
        value2: 0
      }
    },
    components: {
      Navgtb
    },
    methods:{
      get(){
        this.$axios.get('../../../static/json/moeyu.json', {
         params: {
           count:10,
           start:0
          }
        }).then(res => {
          this.contentlist=res["data"]
          console.log(res["data"]);

        })
        .catch(error => {
          console.log(error);
        })
      },
      goDetails(e){
        let idx = e.currentTarget.dataset.idx;
        let pidx = e.currentTarget.parentElement.parentElement.dataset.pidx;
        sessionStorage.clothes=JSON.stringify(this.contentlist[pidx].NewProduct[idx])

      this.$router.push({
        name: 'details',
        query:{msg:'details'}
      })
    }
    },
    created(){
      this.get()
    }
  }
</script>

<style scoped>
img {
    width: 100%;
    height: 375px;
}
a{
  color: #000;
  text-decoration:underline
}
.headings{
  height: 15px;
  margin: 10px;
  overflow: hidden;
}
.NewProduct{
    margin: 0 10px 60px;
}
.box{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.NewProduct img{
  height: 183px;
}

.NewProduct p{
  margin-left: 30px;
  font-size: 15px;
}
.NewProduct h4{
  margin:0 30px;
}
.box li{
  width: 49%;
}
.NewProduct li:active{
  text-decoration: underline;
}
</style>
