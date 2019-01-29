<template>
  <div class="ShoppingCart">
    <div class="ShoppingCart-empty">
      <img src="../../assets/img/cart_null.png">
      <p>购物车空空如也,快去购物吧!</p>
      <van-button class="btn" size="small" type="default">去逛逛</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.ShoppingCart {
  &-empty {
    padding: 80px 45px 140px;
    background-color: #f1f1f1;
    text-align: center;
    font-size: 14px;
    img {
      width: 100px;
    }
    p {
      color: #8f8f94;
      margin: 15px 0;
    }
    .btn {
      border-color: #da322f;
      background-color: #da322f;
      color: #fff;
      width: 100px;
      margin: auto;
      font-size: 14px;
      border-radius: 4px;
    }
  }
}
</style>
