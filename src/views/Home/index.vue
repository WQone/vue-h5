<template>
  <div class="home">
    <van-tabs class="mytab" color="#c02626" :line-height="2" :line-width="42">
      <van-tab :key="index" :title="item" v-for="(item,index) in tabNav"></van-tab>
    </van-tabs>
    <van-swipe :autoplay="3000" class="myswipe" indicator-color="white">
      <van-swipe-item :key="index" v-for="(item, index) in imgArr">
        <img :src="item">
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar background="white" class="mynotice" color="black" left-icon="volume-o" text="全场19.80/kg起包邮"></van-notice-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabNav: ['首页', '美食', '酒饮', '个户', '婴童', '居家', '宠物', '其他'],
      imgArr: [
        'https://img.wochu.cn/upload/eb6e2eb4-3c88-4f4d-abd3-cabe65db19ba.jpg',
        'https://img.wochu.cn/upload/fe452f82-0ed6-4455-a303-d2302606dfd8.jpg',
        'https://img.wochu.cn/upload/79aa2114-306b-451c-a92c-b821db7cdf87.jpg',
      ],
    };
  },
};
</script>
<style lang="less">
.myswipe {
  height: 166px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mynotice {
  font-size: 12px;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  i {
    border-right: 1px solid #f1f1f1;
    color: #c02626;
    padding: 5px 5px 5px 0;
  }
  .van-notice-bar__wrap {
    padding: 0 5px;
  }
}
.mytab {
  .van-tab {
    flex-basis: 17% !important;
    padding: 0;
    flex: 0 0 17% !important;
  }
}
</style>
