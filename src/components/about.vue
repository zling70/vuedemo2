<template>
    <div>
        <button v-on:click="$emit('newzling')">点我试试</button>
        <p>按钮点击时，触发'newzling'事件，将被主组件捕获处理</p>
    </div>
</template>
<script>
export default {
    name:'newsinfo',
    props:[]
}
</script>