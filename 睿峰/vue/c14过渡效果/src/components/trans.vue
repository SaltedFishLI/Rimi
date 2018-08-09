<template>
  <div class="content">
    <!-- 示例1 -->
      <p>
        <button style="button" @click="isVisible=!isVisible">Click Me</button> </p>
      <transition name="slide">
        <h1 v-show="isVisible">Hello World</h1>
      </transition>
      <!-- 示例2 -->
      <p>
        <button style="button" @click="isShow=!isShow">Click Me</button> </p>
      <transition name="anim">
        <h1 v-show="isShow">Hello girl</h1>
      </transition>
      <!-- 示例3 -->
      <p>
        <button style="button" @click="flag=!flag">Click Me</button> </p>
      <transition name="custom-classes-transition" enter-active-class="animated shake" leave-active-class="animated hinge">
        <h1 v-show="flag">Hello girl</h1>
      </transition>
  <!-- 示例4 -->
      <p><input v-model.number="number" type="number" step="100"></p>
      <p>{{ animatedNumber }}</p>
      <!-- 示例5 -->
      <div class="btn-wrap">
      <transition name="slideX" mode="out-in">
          <button  @click="btnClick" key="isEditing">
            {{isEditing?'save':'edit'}}
          </button>

      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TransAnim',
    data() {
      return {
        isVisible: true,
        isShow: true,
        flag: true,
        number: 0,
        tweenedNumber: 0,
        isEditing:true
      }
    },
    computed: {
      animatedNumber: function() {
        return this.tweenedNumber.toFixed(0);
      }
    },
    methods:{
      btnClick(){
        this.isEditing=!this.isEditing
      }
    },
    watch:{
        number(newValue) {
            TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
    }
  }
</script>

<style scoped>
.btn-wrap{
  margin: 0 auto;
  position: relative;
}
.btn-wrap>button{
  position: absolute;
  top: 0;
  left: 50%;
}
.slideX-enter-active,
  .slideX-leave-active {
    transition: all .5s linear;
  }

  .slideX-leave,
  .slideX-enter-to {
    transform: translate(0);
    color: #000;
  }

  .slideX-leave-to,
  .slideX-enter {
    transform: translate(200px);
    color: blue;
  }

  @keyframes flip {
    from {
      transform: rotateY(0)
    }
    to {
      transform: rotateY(360deg)
    }
  }

  .anim-enter-active {
    animation: flip .75s linear;
  }

  .anim-leave-activ {
    animation: flip .75s linear reverse;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all .5s linear;
  }

  .slide-leave,
  .slide-enter-to {
    transform: translate(0);
    color: #000;
  }

  .slide-leave-to,
  .slide-enter {
    transform: translate(200px);
    color: blue;
  }
</style>
