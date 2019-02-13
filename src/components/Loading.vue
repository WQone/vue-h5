 <template>
  <transition name="loading">
    <div class="loading_container">
      <div :style="{backgroundPositionY: -(positionY%7)*50 + 'px'}" class="load_img"></div>
      <svg class="load_ellipse" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      positionY: 0,
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.positionY += 1;
    }, 600);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="less" scoped>
.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.7s;
}
.loading-enter,
.loading-leave-active {
  opacity: 0;
}
@keyframes load {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-50PX);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes ellipse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
.loading_container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50PX;
  height: 50PX;
  z-index: 99;
}
.load_img {
  width: 100%;
  height: 100%;
  background: url('../assets/img/icon_loading.png') no-repeat 0 0;
  background-size: 50PX auto;
  transform: translateY(0px);
  animation: load 0.6s infinite ease-in-out;
  position: relative;
  z-index: 11;
}
.load_ellipse {
  position: absolute;
  top: 45px;
  left: 0;
  width: 60px;
  height: 30px;
  z-index: 10;
  animation: ellipse 0.6s infinite ease-in-out;
}
</style>
