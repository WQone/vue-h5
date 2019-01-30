<template>
  <div style="height:100%;">
    <div style="height:100%;">
      <Header id="header"></Header>
      <div :style="`padding-top:${headerHeight}px;padding-bottom:${tabbarHeight}px`" class="main">
        <router-view></router-view>
      </div>
      <van-tabbar :value="retMenuActive" id="tabbar">
        <van-tabbar-item :dot="item.meta.dot" :icon="item.meta.icon" :info="item.meta.info" :key="index" :to="item.path" active-color="#07c160" v-for="(item,index) in retMenulist">{{item.name}}</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { asyncRouterMap } from '../../router';

export default {
  mounted() {
    this.headerHeight = document.getElementById('header').clientHeight;
    this.tabbarHeight = document.getElementById('tabbar').clientHeight;
  },
  data() {
    return {
      headerHeight: 0,
      tabbarHeight: 0,
    };
  },
  computed: {
    retMenulist() {
      const retList = asyncRouterMap.filter((item) => item.meta && item.meta.menu);
      return retList;
    },
    retMenuActive() {
      return asyncRouterMap.findIndex((item) => this.$route.path === item.path);
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
}
</style>
