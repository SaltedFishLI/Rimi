<template>
    <div>
        员工：
        <!-- 接受父组件传递过来的视图 -->
        <slot name="s1"></slot>
        <hr/>
        <slot name="s2"></slot> 
        <slot name="s3">
            <button>CLICK ME</button>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'Worker',
    data() {
        return{

        }
    }
}
</script>

<style scoped>

</style>