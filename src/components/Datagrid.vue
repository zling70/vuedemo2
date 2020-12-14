<template>
  <div class="hello">
    <h1>{{ msg }}{{ title }}</h1>
    userid:<input name="title" v-bind:value="title"/><input name="userid" v-bind:value="users[1].name"/>
  </div>
</template>

<script>
export default {
  name: 'Mydatagd',
  props: {
    msg: String,
    title: String,
    users: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
