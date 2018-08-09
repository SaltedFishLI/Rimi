<template>
    <div>
        老板：
        <Worker>
            <div slot="s1">我是插槽1
                <h3>我是内容</h3>
            </div>
            <div slot="s2">我是插槽2</div>
            <button slot="s3">SHOW ME</button>
        </Worker>
       
    </div>
</template>

<script>
import Worker from './worker.vue'
export default {
    name: 'Boss',
    components:{
        Worker
    },
    data() {
        return{

        }
    }
}
</script>

<style scoped>

</style>
