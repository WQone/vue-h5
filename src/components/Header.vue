<template>
  <div class="Header">
    <van-icon class="Header-left" name="wap-nav"></van-icon>
    <div class="Header-input">
      <van-search placeholder="请输入关键词搜索" v-model="value"/>
    </div>
    <van-icon class="Header-right" name="shopping-cart-o"></van-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.Header {
  padding: 7px;
  background-color: #e03131;
  height: 44px;
  line-height: 44px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  &-left {
    font-size: 30px;
    color: white;
    position: absolute;
    left: 8px;
    top: 6px;
  }
  &-input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 40px;
    margin: auto;
    .van-search {
      background: white !important;
      height: 100%;
      width: 100%;
      padding: 5px;
      border-radius: 4px;
    }
    /deep/ i {
      font-weight: bold;
      font-size: 18px;
      color: #e03131;
    }
  }
  &-right {
    position: absolute;
    font-size: 30px;
    color: white;
    right: 8px;
    top: 6px;
  }
}
</style>
