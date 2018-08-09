<template>
  <div class="container">
    <Navgtb/>
    <div class="content">
      <div class="bg">
        <div class="shade"></div>
        <div class="hp"></div>
        <div class="useName">{{name.username}}
        </div>
      </div>
      <Collapse  accordion>
        <Panel name="1">
          设置个人资料
          <p slot="content"> <span class="right">E - mail ：</span>
            <Input placeholder="Enter something..." style="width: 240px" />
          </p>
          <p slot="content"> <span class="gender">性 别 ：</span>
            <RadioGroup type="button">
              <Radio label="男" ></Radio>
              <Radio label="女"></Radio>
              <Radio label="保密"></Radio>
            </RadioGroup>
          </p>
          <p slot="content">出生日期
            <DatePicker type="date" multiple placeholder="Select date" style="width: 240px; margin-left: 20%;"></DatePicker>
          </p>
          <p slot="content"><span class="right">手 机 号 :</span>
            <Input placeholder="未绑定" style="width: 240px;margin-left: 2%;" />
          </p>
          <p slot="content"><span class="right">个人描述 :</span>
            <Input style="width: 240px" type="textarea" :rows="4" placeholder="Enter something..." />
          </p>
        </Panel>
        <Panel name="2">
          收货地址管理
           <p slot="content"> <span class="right">您的名字 ：</span>
            <Input placeholder="Enter something..." style="width: 240px" />
          </p>
          <p slot="content"> <span class="right">联系电话 ：</span>
            <Input placeholder="Enter something..." style="width: 240px" />
          </p>
          <p slot="content">
                <select style="padding: 5px 30px;">
                        <option selected="selected">成都地区</option>
                        <option>北京地区</option>
                        <option>深圳地区</option>
                        <option>上海地区</option>
                        <option>其他地区</option>
                    </select>
          </p>
        </Panel>
      </Collapse>
      <div @click="clear">退出登陆</div>
    </div>
  </div>
</template>

<script>
  import Navgtb from '../navgtb'

  export default {
    name: 'Logo',
    data() {
      return {
      }
    },
    components: {
      Navgtb
    },
    created() {
      this.name = JSON.parse(sessionStorage.logoName)
    },
    methods:{
      clear(){
         let self = this;
         sessionStorage.clear();
          self.$router.push({
              name: 'home'
            })
      }
    }
  }
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 200px;
    position: relative;
    background-position: 88% 26%;
    background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2059436709,1135349109&fm=27&gp=0.jpg")
  }

  .shade {
    width: 100%;
    height: 100%;
    opacity: .5;
    background: aliceblue;
  }

  .hp {
    top: 20%;
    left: 41%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    background-size: 179px;
    background-position: 88% 26%;
    background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2059436709,1135349109&fm=27&gp=0.jpg")
  }

  .useName {
    top: 74%;
    left: 48%;
    font-size: 18px;
    font-weight: bolder;
    position: absolute;
  }

  .right {
    margin-left: 2%;
  }

  p {
    margin: 1.5%
  }

  .gender {
    margin-left: 6%
  }
</style>
