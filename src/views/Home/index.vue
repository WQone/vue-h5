<template>
  <div class="home">
    <van-tabs :line-height="2" :line-width="42" class="mytab" color="#c02626">
      <van-tab :key="index" :title="item" v-for="(item,index) in tabNav"></van-tab>
    </van-tabs>
    <van-swipe :autoplay="3000" class="myswipe" indicator-color="white">
      <van-swipe-item :key="index" v-for="(item, index) in imgArr">
        <img :src="item">
      </van-swipe-item>
    </van-swipe>
    <van-row class="myrow">
      <van-col :key="index" :span="24/linkNav.length" v-for="(item, index) in linkNav">
        <img :src="item.img">
        <p>{{item.name}}</p>
      </van-col>
    </van-row>
    <div class="mymarquee">
      <Marquee :NoticeData="NoticeData"></Marquee>
    </div>
    <div class="discountGoods">
      <p class="discountGoods-header">
        <span>限时购</span>
        <span>
          距离结束还剩
          <b>{{hour}}</b>:
          <b>{{Minute}}</b>:
          <b>{{second}}</b>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.timer = setInterval(this.getTime, 1000); // 定时调用
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },
  data() {
    return {
      tabNav: ['首页', '美食', '酒饮', '个户', '婴童', '居家', '宠物', '其他'],
      imgArr: [
        'https://img.wochu.cn/upload/eb6e2eb4-3c88-4f4d-abd3-cabe65db19ba.jpg',
        'https://img.wochu.cn/upload/fe452f82-0ed6-4455-a303-d2302606dfd8.jpg',
        'https://img.wochu.cn/upload/79aa2114-306b-451c-a92c-b821db7cdf87.jpg',
      ],
      linkNav: [
        {
          name: '本周新品',
          img: 'https://oss.100bsh.com/f7/8c/89751694e903.png?90467_OW96_OH96',
        },
        {
          name: '邀请有礼',
          img: 'https://oss.100bsh.com/95/4f/4859e715e9fe.png?62436_OW582_OH582',
        },
        {
          name: '充值优惠',
          img: 'https://oss.100bsh.com/3b/c7/c9b6f7e0e3ee.png?90481_OW96_OH96',
        },
        {
          name: '银行特惠',
          img: 'https://oss.100bsh.com/60/e9/ed00bffb7445.png?90546_OW96_OH96',
        },
      ],
      NoticeData: ['全场19.80/kg起包邮', 'ddewfereetrtrtrtrtrt2', 'asfewteyr6u345454'],
      hour: 0,
      Minute: 0,
      second: 0,
    };
  },
  methods: {
    getTime() {
      const date = new Date();
      const now = date.getTime();
      const endDate = new Date('2019-2-02 00:00:00'); // 设置截止时间
      const end = endDate.getTime();
      const leftTime = end - now; // 时间差
      let h = 0;
      let m = 0;
      let s = 0;
      if (leftTime >= 0) {
        h = Math.floor(leftTime / 1000 / 60 / 60);
        m = Math.floor((leftTime / 1000 / 60) % 60);
        s = Math.floor((leftTime / 1000) % 60);
        if (s < 10) {
          s = `0${s}`;
        }
        if (m < 10) {
          m = `0${m}`;
        }
        if (h < 10) {
          h = `0${h}`;
        }
        this.second = s;
        this.Minute = m;
        this.hour = h;
      } else {
        console.log('已截止');
      }
    },
  },
};
</script>
<style lang="less" scoped>
.myswipe {
  height: 166px;
  img {
    width: 100%;
    height: 100%;
  }
}
.myrow {
  padding: 15px 0;
  text-align: center;
  img {
    width: 50px;
  }
  p {
    margin-top: 5px;
    color: #222;
    font-size: 14px;
  }
}
.mymarquee {
  background: #f1f1f1;
  padding-bottom: 8px;
}
.mytab {
  /deep/ .van-tab {
    flex-basis: 17% !important;
    padding: 0;
    flex: 0 0 17% !important;
  }
}
.discountGoods {
  &-header {
    border-bottom: 1px solid #f1f1f1;
    padding: 5px 10px;
    height: 25px;
    line-height: 25px;
    span {
      &:last-child {
        float: right;
        font-size: 12px;
        b {
          background-color: #c02626;
          color: white;
          padding: 2px 4px;
          border-radius: 4px;
          margin: 0 2px;
        }
      }
    }
  }
}
</style>
