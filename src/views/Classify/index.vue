<template>
  <div class="home">
    <p style="margin-bottom:2px;"></p>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
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
