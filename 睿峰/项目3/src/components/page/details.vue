<template>
  <div class="container">
    <Navgtb :goBack="true"/>
    <div class="content">
      <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger">
        <CarouselItem>
            <div class="demo-carousel"><img :src="clothing.imgs[0]"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img :src="clothing.imgs[1]"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img :src="clothing.imgs[2]"></div>
        </CarouselItem>
    </Carousel>
    <div class="title">{{clothing.title}}</div>
    <div class="price">￥{{clothing.price}}</div>
    <div class="bigSmall">大小：
       <ButtonGroup>
        <Button @click = "clickfun($event)">{{clothing.measure[0]}}</Button>
        <Button @click = "clickfun($event)">{{clothing.measure[1]}}</Button>
        <Button @click = "clickfun($event)">{{clothing.measure[2]}}</Button>
        <Button @click = "clickfun($event)">{{clothing.measure[3]}}</Button>
    </ButtonGroup>
    </div>

    <div class="number">数量：<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" size="small" label="描述文字"></el-input-number></div>
    <div class="end"><el-button size="medium" type="info" round @click="setShopping">加入购物车</el-button><el-button size="medium" type="danger" round>立即购买</el-button></div>
  </div>
  </div>
</template>

<script>
  import Navgtb from '../navgtb'
  export default {
    name: 'Details',
    data(){
    return {
      num1: 1,
      clothing:{
        measure: []
      },
      value3: 0,
      setting: {
          autoplay: true,
          autoplaySpeed: 2000,
          dots: 'inside',
          radiusDot: true,
          trigger: 'click',
          arrow: 'hover'
          }
    }
  },
    components: {
      Navgtb
    },
    created(){
      this.clothing=JSON.parse(sessionStorage.clothes)
      console.log(this.clothing);
    },
    methods: {
      handleChange(value) {
       this.num1=value;
      },
      setShopping(){
        let clos = {
          "name":this.clothing.title,
          "img":this.clothing.imgs[0],
          "price":this.clothing.price,
          "number":this.num1,
          "measure":this.measure
        };
        if (!localStorage.closArr) {
          let closArr=[];
          closArr.push(clos);
        localStorage.setItem("closArr",JSON.stringify(closArr));
            }else{
                let closArr = JSON.parse(localStorage.closArr);
                for (let index = 0,len=closArr.length; index <len; index++) {
                    if(closArr[index].name == clos.name&&closArr[index].measure==clos.measure){
                       closArr[index].number = parseFloat(closArr[index].number) + parseFloat(clos.number);
                       localStorage.setItem("closArr",JSON.stringify(closArr));
                       return;
                    }else{
                      let closArr=[];
          closArr.push(clos);
        localStorage.setItem("closArr",JSON.stringify(closArr));
                    }
                };
                closArr.push(clos);
                localStorage.setItem("closArr",JSON.stringify(closArr));
                alert("添加成功")
                this.$router.push({
                name: 'shopping',
                query:{msg:'shopping'}
      })
            }
        },
      clickfun(e) {
        this.measure=e.target.innerText;

        console.log(e.target.innerText);
      }
    }
  }
</script>

<style scoped>
img{
  height: 375px;
}
.title{
  margin: 5px 10px;
  font-size: 19px;
  font-weight: bolder;
}
.price{
  color: red;
  font-weight: bolder;
  margin: 5px 10px;
  font-size: 18px;
}
.bigSmall{
  height: 37px;
  margin: 5px 10px;
  font-size: 18px;
}
.number{
  height: 37px;
  margin: 22px 10px 5px;
  font-size: 18px;
}
.end{
  height: 37px;
  text-align: center;
  margin: 5px 10px;
  font-size: 18px;
  margin-bottom: 45px;
}
.bigSmall span{
  border: 1px solid black;
  padding: 10px;
  background: white;
}
.redBorder{
  border: 1px solid red  !important;
}
</style>
