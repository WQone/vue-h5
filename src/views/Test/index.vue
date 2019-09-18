<template>
  <div class="home">
    <div class="wrapper" ref="wrapper">
      <div class="wrapper-content">
        <div :key="i" @click="goPage(item.id)" class="list_li" v-for="(item, i) in num">
          <p style="color: yellow">我是{{i}}</p>
          <p>1452542</p>
          <p>254242542</p>
          <p>2542452</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  mounted() {
    console.log('mounted');
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 2,
        bounce: false,
      });
    });
  },
  activated() {
    console.log('activated', this.num);
    if (!this.scroll) {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 2,
          bounce: false,
        });
        this.onScroll();
      });
    } else {
      this.onScroll();
      console.log('this.scrolly', this.scrolly, this.scroll);
      this.scroll.scrollTo(0, this.scrolly, 0);
    }
  },
  deactivated() {
    this.offScroll();
  },
  data() {
    return {
      num: 10,
      scroll: null,
      scrolly: 0,
    };
  },
  methods: {
    goPage() {
      this.$router.push({ path: '/Home/Item' });
      console.log('跳转详情');
    },
    onScroll() {
      // 滚动
      this.scroll.on('scroll', () => {
        console.log('滚动', this.scroll.y);
        this.scrolly = this.scroll.y;
      });
      // 滚动到底部
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= this.scroll.maxScrollY) {
          console.log(99);
          this.num += 10;
          this.scroll.refresh();
        }
      });
    },
    offScroll() {
      this.scroll.off('scrollEnd');
      this.scroll.off('scroll');
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
}
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  .list_li {
    background: red;
    margin-bottom: 20px;
  }
}
</style>
