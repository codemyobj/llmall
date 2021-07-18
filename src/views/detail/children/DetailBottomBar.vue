<template>
  <div class="bottom-bar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        :badge="cartLength"
        icon="cart-o"
        text="购物车"
        @click="$router.push('/cart')"
      />
      <van-goods-action-icon
        :icon="isShouCang ? 'star' : 'star-o'"
        :color="isShouCang ? '#ff5000' : '#000000'"
        :text="isShouCang ? '已收藏' : '收藏'"
        @click="starClick"
      />
      <van-goods-action-button
        text="加入购物车"
        type="warning"
        @click="addToCart"
      />
      <van-goods-action-button
        text="购买"
        type="danger"
        @click="$router.push('/cart')"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailBottomBar",
  components: {},
  props: {},
  data() {
    return {
      isShouCang: false,
    };
  },
  computed: {
    ...mapGetters({
      cartLength: "cartListLength",
    }),
  },
  created() {
    //每次刷新页面获取本地存储购物车数据
    let list = JSON.parse(localStorage.getItem("cartList")) || [];
    if (list) {
      this.$store.commit("setCartList", list);
    }
  },
  methods: {
    starClick() {
      if (!this.isShouCang) {
        this.$toast("收藏成功");
        this.isShouCang = true;
      } else {
        this.$toast("已取消收藏");
        this.isShouCang = false;
      }
    },
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
}

/deep/ .van-goods-action {
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #ccc;
}

/deep/ .van-goods-action-icon {
  height: auto;
}
</style>