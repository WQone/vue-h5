<template>
  <div class="Classify">
    <ul class="Classify-nav">
      <li :key="index" @click="changeNav(item)" v-for="(item, index) in nav">
        <p :class="item === navActive ? 'navActiveClass' :''">{{item}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        '我厨优选',
        '餐馆名菜',
        '全部竞猜',
        '蔬菜',
        '水果',
        '肉类',
        '水产海鲜',
        '点心速食',
        '儿童专区',
        '西餐',
        '粮油',
        '小吃',
      ],
      navActive: '我厨优选',
    };
  },
  methods: {
    changeNav(item) {
      this.navActive = item;
    },
  },
};
</script>
<style lang="less" scoped>
.Classify {
  position: relative;
  height: 100%;
  &-nav {
    height: 100%;
    border-right: 1px solid #f1f1f1;
    width: 90px;
    overflow-y: auto;
    overflow-x: hidden;
    li {
      width: 100%;
      padding: 10px 0;
      box-sizing: border-box;
      p {
        font-size: 14px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: hidden;
      }
    }
    .navActiveClass {
      font-size: 16px;
      border-left: 2px solid #da3231;
      color: #da3231;
    }
  }
}
</style>
