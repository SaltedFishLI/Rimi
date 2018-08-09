<template>
    <div>
        子组件
        <button type="button" @click="sendMsg">BUTTON</button>
    </div>
</template>

<script>
    export default {
        name: "Child",
        data() {
            return {
    
            }
        },
        // 接收父组件传递过来的数据
        props: {
            num: {
                // 指定类型
                type: Number,
                // 指定默认值
                default: 5
            }
        },
        computed: {
            // 重新计算父组件传递过来的数据
            addNum() {
                return this.num + 5;
            }
        },
        methods: {
            sendMsg(event) {
                // 点击按钮时将数据重新运算之后再发送给父组件
                this.$emit("msg", this.addNum);
            }
        }
    }
</script>