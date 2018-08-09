<template>
    <div>
        <h1 class="title">Hello, world!</h1>
        <p>{{msg}}</p>
    </div>
</template>
    
<script>

export default {
    name: 'HelloWorld',
    data(){
        return{
            msg:'Hi'
        }
    }
}
</script>

<style>
    .title{
        color:blue;
    }
</style>