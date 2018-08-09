<template>
  <div class="container">
    <NavigationBar :goBack="true"/>
    <div class="content">
    </div>
    <Tabbar/>
  </div>
</template>


<script>
import Tabbar from '../tabbar'
import NavigationBar from '../navigationBar'
export default {
  name: 'Details',
  data(){
    return {

    }
  },
  components:{
    Tabbar,
    NavigationBar
  },
}
</script>


<style scoped>

</style>
