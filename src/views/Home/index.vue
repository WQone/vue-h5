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
    <div class="mymarquee f1Space">
      <Marquee :NoticeData="NoticeData"></Marquee>
    </div>
    <div class="discountGoods">
      <p class="discountGoods-header">
        <span>限时购</span>
        <span>
          距离结束还剩
          <b>{{day}}</b>:
          <b>{{hour}}</b>:
          <b>{{Minute}}</b>:
          <b>{{second}}</b>
        </span>
      </p>
      <ul class="discountGoods-list f1Space">
        <li :key="index" v-for="(item,index) in 9">
          <div class="li-img">
            <img src="https://oss.100bsh.com/f0/43/4e0808801aa5.jpg!m?39679_OW800_OH800">
          </div>
          <div class="li-text">
            <p class="title">喜力啤酒 330ml*6 听装喜力啤酒 330ml*6 听装喜力啤酒 330ml*6 听装喜力啤酒 330ml*6 听装喜力啤酒 330ml*6 听装</p>
            <p class="des">进口果汁 浓郁的芒果香</p>
            <div class="price">
              <div>
                <big>￥38.80</big>
                <del>￥60.00</del>
              </div>
              <van-button size="small" type="danger">马上抢</van-button>
            </div>
          </div>
        </li>
      </ul>
      <div class="mainGoods">
        <div class="mainGoods-header f1Space">
          <img src="https://oss.100bsh.com/6f/ae/aefcb27f377f.jpg?76166_OW1200_OH500">
        </div>
        <div class="mainGoods-list">
          <div :key="item" class="mainGoods-list-box" v-for="item in 9">
            <div class="mainGoods-list-box-img">
              <img src="https://oss.100bsh.com/30/3d/34099f05169d.jpg!l?88482_OW800_OH800">
            </div>
            <p>杨生记 糯米锅巴 (原味) 250g</p>
            <p class="price">¥10.80</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.countdown();
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
      day: 0,
      hour: 0,
      Minute: 0,
      second: 0,
    };
  },
  methods: {
    countdown() {
      const end = Date.parse(new Date('2019-2-01'));
      const now = Date.parse(new Date());
      const msec = end - now;
      const day = parseInt(msec / 1000 / 60 / 60 / 24, 0);
      const hr = parseInt((msec / 1000 / 60 / 60) % 24, 0);
      const min = parseInt((msec / 1000 / 60) % 60, 0);
      const sec = parseInt((msec / 1000) % 60, 0);
      this.day = day;
      this.hour = hr > 9 ? hr : `0${hr}`;
      this.Minute = min > 9 ? min : `0${min}`;
      this.second = sec > 9 ? sec : `0${sec}`;
      const that = this;
      setTimeout(() => {
        that.countdown();
      }, 1000);
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
  &-list {
    li {
      border-bottom: 1px solid #f1f1f1;
      height: 105px;
      padding: 10px;
      position: relative;
      .li-img {
        height: 100%;
        width: 105px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .li-text {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        padding: 10px 10px 10px 125px;
        height: 100%;
        box-sizing: border-box;
        line-height: 25px;
        .title,
        .des {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow-x: hidden;
        }
        .des {
          color: #999;
          font-size: 13px;
        }
        .price {
          display: flex;
          justify-content: space-between;
          margin-top: 25px;
          big {
            color: #c91523;
            margin-right: 5px;
          }
          del {
            color: #999;
            font-size: 13px;
          }
        }
      }
    }
  }
}
.mainGoods {
  &-list {
    &-box {
      width: 50%;
      height: 190px;
      border-bottom: 1px solid #f1f1f1;
      border-right: 1px solid #f1f1f1;
      float: left;
      box-sizing: border-box;
      text-align: center;
      padding: 5px 15px;
      &:nth-child(2n) {
        border-right: none;
      }
      &-img {
        height: 78%;
      }
      p {
        font-size: 12px;
        color: #767676;
        padding-bottom: 5px;
      }
      .price {
        color: #c91523;
      }
    }
  }
}
</style>
