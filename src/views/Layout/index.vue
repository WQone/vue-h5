<template>
  <div style="height:100%;">
    <div style="height:100%;">
      <router-view></router-view>
      <van-tabbar :value="retMenuActive">
        <van-tabbar-item :dot="item.meta.dot" :icon="item.meta.icon" :info="item.meta.info" :key="index" :to="item.path" active-color="#07c160" v-for="(item,index) in retMenulist">{{item.name}}</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { asyncRouterMap } from '../../router';

export default {
  mounted() {},
  data() {
    return {};
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

<style scoped>
</style>
