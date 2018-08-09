<template>
  <div class="container">
    <Navgtb/>
    <div class="content">
      <div class="shopBox" v-for="(sop, index) in shoppingCar" :key="index">
        <img :src="sop.img" alt="">
        <span>
              <p>{{sop.name}}</p>
              <p>￥{{sop.price}}</p>
              <p>{{sop.measure}}</p>
              <div class="number">数量：<el-input-number name="num"  v-model="sop.number"  :min="1" :max="10" size="small" label="描述文字"></el-input-number></div>
              <el-button class="del"  size="medium" @click="remove" type="danger" round>删除</el-button>
            </span>

      </div>
      <div class="base"><span class="total">￥{{ad}}.00</span>
        <el-button size="medium" class="checkOut
          " type="danger" round>结账</el-button>
      </div>

    </div>

  </div>
</template>

<script>
  import Navgtb from '../navgtb'

  export default {
    name: 'Shoppingcar',
    data() {
      return {
        shoppingCar: {},
        productList: [],
        ad: 0
      }
    },
    components: {
      Navgtb
    },
    created() {
      this.shoppingCar = JSON.parse(localStorage.closArr);

    },
    watch: {
      wa() {}
    },
    computed: {
      wa() {
             for (let i = 0; i < this.shoppingCar.length; i++) {
            this.ad += this.shoppingCar[i].price * $(" input[ name='num' ] ").val()
      }


      }

    },
    methods: {
      remove: function(index) {
        var vm = this;
        if (confirm("你确定移除该商品？")) {
          vm.shoppingCar.splice(index, 1)
        }
      },
    }
  }
</script>

<style scoped>
  .content {
    margin-bottom: 70px;
  }

  .shopBox {
    width: 90%;
    height: 200px;
    margin: 10px auto;
    position: relative;
    background: rgb(226, 229, 230)
  }

  .shopBox img {
    width: 30%;
    left: 3%;
    top: 22%;
    position: absolute;
  }

  .shopBox span {
    width: 50%;
    margin: 9% 10px 10% 43%;
    display: inline-block;
  }

  .base {
    width: 100%;
    height: 50px;
    position: relative;
  }

  .total {
    right: 34%;
    top: 10%;
    font-size: 22px;
    font-weight: bold;
    position: absolute;
  }

  .checkOut {
    right: 10%;
    top: 10%;
    position: absolute
  }

  .del {
    right: 1%;
    bottom: 1%;
    position: absolute
  }
</style>
