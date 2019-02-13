<template>
  <div class="Classify">
    <ul class="Classify-nav">
      <li :key="index" @click="changeNav(item)" v-for="(item, index) in nav">
        <p :class="item === navActive ? 'navActiveClass' :''">{{item}}</p>
      </li>
    </ul>
    <div class="Classify-body">
      <div :key="index" class="Classify-body-box f1Space" v-for="(item, index) in itemArr">
        <p class="box-tit">
          <span>{{item.title}}</span>
        </p>
        <van-row class="box-ul">
          <van-col :key="i" class="box-ul-li" span="8" v-for="(itemchild, i) in item.children">
            <img :src="itemchild.img">
            <p>{{itemchild.name}}</p>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import baseList from './baseList';

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
  computed: {
    itemArr() {
      const retList = baseList.filter((item) => this.navActive === item.nav)[0];
      return retList ? retList.item : null;
    },
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
    position: relative;
    z-index: 1;
    height: 100%;
    border-right: 1px solid #f1f1f1;
    width: 90px;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
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
  &-body {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 90px;
    overflow-y: auto;
    .box-tit {
      font-size: 15px;
      text-align: center;
      height: 45px;
      line-height: 45px;
      font-weight: 550;
      color: #011e00;
      span {
        &::before,
        &::after {
          content: '';
          border-bottom: 1px solid #e5e5e5;
          display: inline-block;
          width: 25px;
          vertical-align: middle;
          margin: 0 10px;
        }
      }
    }
    .box-ul {
      padding: 10px;
      overflow: hidden;
      &-li {
        text-align: center;
        color: #666;
        font-size: 12px;
        img {
          width: 60px;
          height: 60px;
        }
        p {
          padding: 4px 0 10px 0;
        }
      }
    }
  }
}
</style>
