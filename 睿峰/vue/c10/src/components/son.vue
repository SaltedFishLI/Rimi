<template>
    <div>
        儿子:{{msg}}
        <p>{{num+10}}</p>
        <p>{{getBorn}}</p>
        <button type="button" @click="sendMsg">BUTTON</button>
    </div>
</template>
<script>
    export default {
        name: 'Son',
        props: {
            msg:String,
            birth:{
                //限制数据类型
                type:String,
                //必须实现
                required:true
            },
            num:{
                type:Number,
                //默认值
                default:20
            }
        },
        computed: {
            getBorn() {
                let year = this.birth.slice(6, 10);
    
                let month = this.birth.slice(10, 12);
    
                let day = this.birth.slice(12, 14);
    
                return `出生日期:${year}年${month}月${day}日`
    
            }
    
        },
    
        data() {
    
            return {
                Str: "我是子组件数据"
            }
    
        },
        methods: {
            sendMsg(event) {
                // 像父组件发送数据
                // 参数1：key / 参数2：value
                this.$emit("send", this.Str);
            }
    
        }
        }
    
</script>
<style scoped>
    
</style>
