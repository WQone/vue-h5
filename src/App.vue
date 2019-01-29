<template>
  <div id="app">
    <div class="cover" v-if="this.time > 0">
      <div class="time">
        {{time}}
        <span>s</span>
      </div>
      <img src="./assets/timg.jpg">
    </div>
    <router-view v-else/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.Countdown();
  },
  data() {
    return {
      time: 0,
    };
  },
  methods: {
    Countdown() {
      const data = setInterval(() => {
        this.time -= 1;
        if (this.time <= 0) {
          clearInterval(data);
        }
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-size: 16px;
}
.cover {
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  .time {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: white;
    opacity: 0.5;
    position: absolute;
    right: 10px;
    top: 10px;
    text-align: center;
    line-height: 45px;
    font-size: 18px;
    span {
      font-size: 14px;
      margin-left: 2px;
    }
  }
}
</style>
