<template>
  <div class="about">
    <h1>This is an about {{ abtmsg }} page</h1>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <test></test>
    <p>
      如果是通过属性-props传递只能传递字符或对象的字面量，不能解析对象：如下
    </p>
    <blog-post stu="{id:1,age:47}"></blog-post>
    <p>父组件向子组件传递集合数据</p>
    <blog-post2
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:numb="post.id"
      v-bind:title="post.name"
    ></blog-post2>
    <p>父组件监听子组件事件demo</p>
    <div :style="{ fontSize: postFontSize + 'em' }">
      hello,当按钮被点击时，字体增大
      <newinfo v-on:newzling="enlargeText"></newinfo>
      <p>newinfo组件处理‘newzling’事件，增大字体</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
//import { Button } from 'vxe-table';
import newinfo from "../components/about.vue";

Vue.component("test", {
  data() {
    return {
      amount: 0,
    };
  },
  template:
    '<button v-on:click="amount++">组件按钮点击 {{ amount }} times.</button>',
});
Vue.component("blog-post", {
  props: ["title", "name", "stu"],
  template: "<h3>{{stu}}</h3>",
});
Vue.component("blog-post2", {
  props: ["numb", "title"],
  template: "<h3>成员信息：id-{{numb}},name-{{title}}</h3>",
});

export default {
  name: "about",
  data() {
    return {
      abtmsg: "vue基础学习",
      count: 0,
      posts: [
        { id: 1, name: "刘备" },
        { id: 2, name: "关羽" },
        { id: 3, name: "张飞" },
      ],
      postFontSize: 1,
      article: { title: "新闻", content: "新冠肺炎" },
    };
  },
  components: { newinfo },
  methods: {
    enlargeText() {
      this.postFontSize += 0.1;
      console.log("父子组件事件处理测试");
    },
  },
};
</script>