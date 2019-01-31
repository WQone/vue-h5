<template>
  <div class="Marquee" style="height:30px;line-height: 30px; ">
    <van-icon name="volume-o"/>
    <div :style="{marginTop: `-${NoticeIndex}px`,  transition: `${NoticeIndex ? duration: 0}ms`}" class="text">
      <template v-for="(item, index) in NoticeData">
        <p :key="index">{{item}}</p>
      </template>
    </div>
  </div>
</template>

<script>
// 因为动态样式必须是px单位，所以高度最好不要转换rem

export default {
  mounted() {
    if (this.NoticeData[0]) this.NoticeData.push(this.NoticeData[0]);
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
      default: 500,
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
      if (this.NoticeIndex >= (this.NoticeData.length - 1) * 30) {
        this.NoticeIndex = 0;
      } else {
        this.NoticeIndex += 30;
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
  width: 100%;
  overflow: hidden;
  padding: 5px 0;
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
    padding-left: 45px;
    padding-right: 15px;
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
