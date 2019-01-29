<template>
  <div class="Marquee">
    <van-icon name="volume-o"/>
    <div :style="{transform: `translate3d(0,-${NoticeIndex*40}px,0)`,  transition: `transform ${duration}ms`}" class="text">
      <template v-for="(item, index) in NoticeData">
        <p :key="index">{{item}}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.timer = setInterval(this.changeNotice, this.interval); // 定时调用
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },
  props: {
    NoticeData: {
      type: Array,
      default() {
        return [];
      },
    },
    interval: {
      type: Number,
      default: 2000,
    },
    duration: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      timer: '',
      NoticeIndex: 0,
    };
  },
  methods: {
    changeNotice() {
      if (this.NoticeIndex === this.NoticeData.length - 1) {
        this.NoticeIndex = 0;
      } else {
        this.NoticeIndex = this.NoticeIndex + 1;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.Marquee {
  background: white;
  position: relative;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  height: 40px;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  line-height: 40px;
  overflow: hidden;
  i {
    top: 5px;
    position: absolute;
    left: 15px;
    font-size: 16px;
    border-right: 1px solid #f1f1f1;
    color: #c02626;
    padding: 5px 6px 5px 0;
  }
  .text {
    font-size: 12px;
    padding-left: 30px;
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
