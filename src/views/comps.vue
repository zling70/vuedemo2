<template>
    <div>
    <h1>组件中使用v-model</h1>
    <input type="text" v-bind:value=customer.name placeholder="请输入值" name="name">
    </div>
</template>
<script>
export default {
    name: 'compsdemo',
    data(){
        return {customer:{id:1,name:'刘备'}}
    }
}
</script>