<template>
  <div class="home">
    <p style="margin-bottom:2px;"></p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
<style>
.home {
  color: red;
  font-size: 15px;
  border: 2px solid;
  height: 100px;
}
</style>
