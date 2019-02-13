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
    <div class="myping">
      <div class="myping-img">
        <img src="../../assets/img/fg-title.png">
      </div>
      <div  class="myping-body">
        <div class="myping-ul" ref="back">
          <div :key="i" class="myping-ul-li" v-for="i in 9"></div>
        </div>
      </div>
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
        <div class="mainGoods-list f1Space">
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
      touch: {},
      tabNav: ['首页', '美食', '酒饮', '个户', '婴童', '居家', '宠物', '其他'],
      imgArr: [
        'https://img.wochu.cn/upload/eb6e2eb4-3c88-4f4d-abd3-cabe65db19ba.jpg',
        'https://img.wochu.cn/upload/fe452f82-0ed6-4455-a303-d2302606dfd8.jpg',
        'https://img.wochu.cn/upload/79aa2114-306b-451c-a92c-b821db7cdf87.jpg',
      ],
      linkNav: [
        {
          name: '本周新品',
          img: 'https://oss.100bsh.com/f7/8c/89751694e903.png',
        },
        {
          name: '邀请有礼',
          img: 'https://oss.100bsh.com/95/4f/4859e715e9fe.png',
        },
        {
          name: '充值优惠',
          img: 'https://oss.100bsh.com/3b/c7/c9b6f7e0e3ee.png',
        },
        {
          name: '银行特惠',
          img: 'https://oss.100bsh.com/60/e9/ed00bffb7445.png',
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
    touchStart(e) {
      console.log(e.touches[0]);
      const touch = e.touches[0];
      // this.touch.startX = touch.pageX;
      // this.touch.startY = touch.pageY;
    },
    touchMove(e) {
      const touch = e.touches[0];
      console.log(e.touches[0]);
      console.log('move', touch.pageX, this.$refs.back.style.width);
      // this.$refs.back.style.transform = `translate3d(${touch.pageX}px,0,0)`;
      // this.$refs.back.style.transitionDuration = 10;
    },
    touchEnd(e) {
      console.log(e.touches[0]);
      console.log('end');
    },
    // 倒计时
    countdown() {
      const msec = new Date('2019/2/14') - new Date();
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
.myping {
  overflow: hidden;
  &-img {
    height: 28px;
    left: 12px;
    padding-bottom: 8px;
    position: relative;
    img {
      width: auto;
    }
  }
  &-body {
    padding: 25px 12px;
    background: -webkit-linear-gradient(270deg, #ffc793, #f9d8a9);
    overflow-x: auto;
    width: 100%;
    box-sizing: border-box;
  }
  &-ul {
    // transform: translate3d(-435.6px, 0px, 0px);
    transition-duration: 0ms;
    display: flex;
    &-li {
      flex-shrink: 0;
      width: 120px;
      background: white;
      height: 180px;
      box-shadow: 0 5px 12px #f9b188;
      border-radius: 8px;
      margin-right: 12px;
    }
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
