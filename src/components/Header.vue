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
    <div class="Header" id="header">
      <van-icon @click="$router.push('/')" class="Header-left" name="arrow-left" v-if="!isHome"></van-icon>
      <van-icon :style="isHome ? '':'left:40px;'" @click="isShow = true" class="Header-left" name="wap-nav"></van-icon>
      <div :style="isHome ? '':'padding-left:72px;'" class="Header-input">
        <van-search placeholder="请输入关键词搜索" v-model="value" v-if="isSearch"/>
        <p v-else>{{this.$route.name}}</p>
      </div>
      <van-icon @click="$router.push('/ShoppingCart')" class="Header-right" name="shopping-cart-o"></van-icon>
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
  computed: {
    isHome() {
      let ret = true;
      if (this.$route.path !== '/Home') ret = false;
      return ret;
    },
    isSearch() {
      let ret = true;
      if (this.$route.path !== '/Home' && this.$route.path !== '/Classify') ret = false;
      return ret;
    },
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
  line-height: 30px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  z-index: 200;
  &-left {
    line-height: 30px;
    font-size: 27px;
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
    color: white;
    text-align: center;
    .van-search {
      background: white !important;
      height: 100%;
      width: 100%;
      padding: 5px;
      border-radius: 4px;
    }
    /deep/ i:first-child {
      font-weight: bold;
      font-size: 18px;
      color: #e03131;
    }
  }
  &-right {
    line-height: 30px;
    font-size: 27px;
    position: absolute;
    color: white;
    right: 8px;
    top: 6px;
  }
}
</style>
