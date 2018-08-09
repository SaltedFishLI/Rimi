<template>
  <div class="container">
    <Navgtb/>
    <el-input class="searchBox" v-model="keywords" placeholder="请输入内容"></el-input>
    <div class="content">
         <div>
        <div class="box" @click="goDetails" v-for="(newP, index) in filterArr()" :key="index" :data-idx="index">
          <span class="imgBox"><img :src="newP.imgs[0]" alt="" >
          <img class="hidden" :src="newP.imgs[1]" alt="" ><img class="hidden" :src="newP.imgs[2]" alt="" ></span>
          <span class="textBox">
            <h4 class="name">{{newP.title}}</h4>
            <p class="price">￥{{newP.price}}</p>
            <span class="hidden measure">{{newP.measure[0]}}</span>
            <span class="hidden measure">{{newP.measure[1]}}</span>
            <span class="hidden measure">{{newP.measure[2]}}</span>
            <span class="hidden measure">{{newP.measure[3]}}</span>
          </span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Navgtb from '../navgtb'

  export default {
    name: 'Search',
    data() {
      return {
         contentlist:'',
         keywords:'',
         searchs:[]
      }
    },
    components: {
      Navgtb
    } ,

    methods:{
      filterArr(){
            let _this = this;
            return this.searchs.filter((item) => {
                let reg = new RegExp(_this.keywords);
                return reg.test(JSON.stringify(item));
            })
        },
        goDetails(e) {
          let index = e.currentTarget.dataset.idx;
          let imgs =$(".imgBox img");
          let lens =$(".measure")
          let arr = [];
            arr.push(imgs[++index*3-1].src)
            arr.push(imgs[++index*3-2].src)
            arr.push(imgs[++index*3].src)
            let lenth=[];
            lenth.push(lens[0].textContent)
            lenth.push(lens[1].textContent)
            lenth.push(lens[2].textContent)
            lenth.push(lens[3].textContent)
            let itemMsg = {
              price:$(".price")[index].textContent,
                title:$(".name")[index].textContent,
                imgs:arr,
                measure:lenth,
            }
            sessionStorage.setItem("clothes",JSON.stringify(itemMsg));
            // 进入详情页
            this.$router.push({
                name: 'details',
            });
        },
    },
    created(){
          this.$axios.get('../../../static/json/moeyu.json')
        .then(res => {
            this.contentlist = res['data'];
            this.contentlist.forEach((item,index)=> {
              item.NewProduct.forEach((item,index)=>{
                this.searchs.push(item)
              })
            });
        })
        .catch(error => {

        })

    },

  }
</script>

<style scoped>
.content {
    margin: 0 5%;
  }
.box{
  height: 144px;
  margin: 10px auto;
}
.box .imgBox{
  width: 50%;
  height: 92%;
  overflow: hidden;
  display: inline-block
}
.box .imgBox img{
  width: 100%;
}
.textBox{
  width: 100px;
  display: inline-block
}
input{
    border:1px solid black;
}
.hidden{
  display: none;
}
.searchBox{
  width: 80%;
  margin: 10px 10%;
}
</style>
