<template>
  <div>
    <div @click="isShow = false" class="Mask" v-if="isShow"></div>
    <div :style="isShow ? 'margin-left:0px;opacity: 1;':'margin-left:-100%;opacity: 0;'" class="Sidebar">
      <p class="Sidebar-status">请登录</p>
      <ul class="Sidebar-list">
        <li>
          <span>首页</span>
        </li>
        <li>
          <span>分类</span>
        </li>
        <li>
          <span>活动</span>
        </li>
      </ul>
    </div>
    <div class="Header">
      <van-icon @click="isShow = true" class="Header-left" name="wap-nav"></van-icon>
      <div class="Header-input">
        <van-search placeholder="请输入关键词搜索" v-model="value"/>
      </div>
      <van-icon class="Header-right" name="shopping-cart-o" @click="$router.push('/ShoppingCart')"></van-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      isShow: false,
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.Mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.4);
}
.Sidebar {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 80%;
  height: 100%;
  background-color: #fff;
  overflow: scroll;
  transition: 0.5s;
  &-status {
    box-sizing: border-box;
    color: #fff;
    font-size: 20px;
    height: 64px;
    background-color: #e03131;
    padding: 12px;
    line-height: 40px;
  }
  &-list {
    font-size: 15px;
    padding-left: 32px;
    border-bottom: 1px solid #ddd;
    li {
      line-height: 45px;
    }
  }
}

.Header {
  padding: 7px;
  background-color: #e03131;
  height: 44px;
  line-height: 44px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 999;
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
