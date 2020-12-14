<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Testgrid msg="Welcome to Your Vue.js App" title="hello"/>
    <Testgrid msg="这是我们的vue模板" title="模板语法" v-bind:users="users"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Testgrid from '@/components/Datagrid.vue'
export default {
  name: 'Mydata',
  components: {
    Testgrid
  },
  data(){
    return {users:[{id:1,name:'aaa'},{id:2,name:'bbb'}]}
  }
}
</script>
