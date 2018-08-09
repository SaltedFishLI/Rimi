<template>
    <div>
        父亲:
        <input type="text" v-model="birth">
        <button type="button">发送数据</button>
        <Son @send="getMsg" msg="我是从父组件中传递过来的" :birth="birth" 
        :num="num*1"/>
    </div>
</template>
<script>
    import Son from './son'
    export default {
        name: 'Parent',
        components: {
            Son
        },
        methods: {
            semd() {
                this.birth = this.tmp
            },getMsg(data) {
                // 打印子组件传递过来的数据
                this.str= data;
                console.log(data);
            }
        },
        data() {
            return {
                num:'10',
                tmp: '',
                birth: '',
                str:''
            }
        }
    }
</script>
<style scoped>
    
</style>