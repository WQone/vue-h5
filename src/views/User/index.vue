<template>
  <div class="User">
    <div class="User-group">
      <div class="van-cell-group">
        <van-cell is-link title="登录"/>
        <van-cell is-link title="注册"/>
      </div>
    </div>
    <van-cell-group class="user-group">
      <van-cell is-link title="全部订单" value="查看更多订单"/>
    </van-cell-group>
    <van-row class="User-links">
      <van-col :key="index" :span="24/nav.length" v-for="(item, index) in nav">
        <van-icon :name="item.icon"/>
        {{item.name}}
      </van-col>
    </van-row>

    <van-cell-group>
      <van-cell icon="exchange" is-link title="我的积分"/>
      <van-cell icon="gold-coin" is-link title="我的优惠券"/>
      <van-cell icon="gift" is-link title="我收到的礼物"/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { name: '待付款', icon: 'paid' },
        { name: '待收货', icon: 'logistics' },
        { name: '待评价', icon: 'records' },
        { name: '售后', icon: 'like-o' },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.User {
  &-group {
    background: #f1f1f1;
    padding: 10px;
    .van-cell-group {
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 6px;
    }
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
      margin-bottom: 5px;
    }
    .van-col {
      border-right: 1px solid #f5f5f5;
      &:last-child{
        border-right:none;
      }
    }
  }
}
</style>
