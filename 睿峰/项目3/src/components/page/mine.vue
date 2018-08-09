<template>
  <div class="container">
    <Navgtb/>
    <div class="content">
      <el-tabs class="underline" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="center" label="登陆" name="first">
          <p>
            <span>用户名:</span>
            <input type="text" class="border" v-model="reName" placeholder="请输入用户名">
          </p>
          <p>
            <span class="right">密码:</span>
            <input type="password" class="border" v-model="rePass" placeholder="请输入密码">
          </p>
          <div class="left">
            <el-button type="primary" @click="loginClick" round>登陆</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane class="center" label="注册" name="second">
          <p>
            <span>用户名:</span>
            <input type="text" class="border" v-model="reName" placeholder="请输入用户名">
          </p>
          <p>
            <span class="right">密码:</span>
            <input type="password" class="border" v-model="rePass" placeholder="请输入密码">
          </p>
          <p>
            <span class="right">手机:</span>
            <input type="tel" class="border " v-model="rePhone" placeholder="请输入手机号">
          </p>
          <div class="left">
            <el-button type="primary" @click="regClick" round>注册</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
  import Navgtb from '../navgtb'

  export default {
    name: 'Mine',
    data() {
      return {
        input: '',
        activeName: 'first',
        rePass: "",
        reName: "",
        rePhone: "",
        str:''
      }
    },
    components: {
      Navgtb
    },
    created() {
      router.beforeEach((to, from, next) => {
        if (to.matched.some(m => m.meta.auth)) {
          if (store.states.isLogin == '100') {
            next()
          } else {　　　　　　
            next({
              path: '/logo',
              query: {
                Rurl: to.fullPath
              }
            })　　　　　
          }　　　　
        } else {　　　　　　
          next()　　
        }
      })
    },
    methods: {
      handleClick(tab, event) {},
      loginClick() {
        let self = this;
        Bmob.User.logIn(this.reName, this.rePass, {
          success: function(user) {
            self.$router.push({
              name: 'logo'
            })
            console.log("cg");
            sessionStorage.setItem('accessToken', 1)
            sessionStorage.logoName = JSON.stringify(user);
            alert("登陆成功")
            self.$router.push({
              name: 'logo'
            })
          },
          error: function(user, error) {
            console.log("sbai");
          }
        });
      },
      regClick() {
        let self = this;console.log(this.rePhone);
      if(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(this.rePhone)){
        return alert("手机号不正确！")
      }else{
        var user = new Bmob.User();
        user.set("username", this.reName);
        user.set("password", this.rePass);
        user.set("phone", this.rePhone);
        user.signUp(null, {
          success: function(user) {
            alert("注册成功")
            sessionStorage.setItem('accessToken', 1)
            sessionStorage.logoName = JSON.stringify(user);
            self.$router.push({
              name: 'logo'
            })
          },
          error: function(user, error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
        }
        }
      },
  }
</script>

<style scoped>
  .content {
    margin: 0 12%;
  }

  .border {
    width: 70%;
  }

  .underline {
    width: 100%;
  }

  .underline p {
    margin: 8% 0;
  }

  .right {
    margin-left: 6%;
  }

  .left {
    margin-left: 37%;
  }

  input {
    font-size: 18px;
    padding: 6px 10px;
    border-radius: 20px;
    border: 1px solid black;
  }

  span {
    font-size: 18px
  }
</style>
