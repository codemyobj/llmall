<template>
  <div class="cart-list">
    <scroll class="scoll-heiht">
      <div class="shop-item" v-for="(item, index) in cartList" :key="index">
        <div class="item-selector">
          <van-checkbox @change="handleCheckedItem" v-model="item.checked" />
        </div>
        <div class="item-img">
          <img :src="item.image" alt="商品图片" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">商品描述：{{ item.desc }}</div>
          <div class="info-bottom">
            <div class="item-price">￥{{ item.price }}</div>
            <div class="item-count">x{{ item.count }}</div>
          </div>
        </div>
      </div>
    </scroll>

    <!-- 底部订单栏 -->
    <div class="cart-bottom-bar">
      <div class="cart-bottom-check">
        <van-checkbox
          class="checked-all"
          v-model="checkedAll"
          @click="handleCheckedAll"
        >
          全选
        </van-checkbox>
      </div>
      <div class="cart-bottom-price">
        合计：
        <span>￥{{ totalPrice }}</span> 元
      </div>
      <div class="cart-bottom-btn">
        <button @click="onSubmit">提交订单({{ checkedLength }})</button>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
  },
  props: {},
  data() {
    return {
      checkedAll: false,
    };
  },
  computed: {
    ...mapGetters(["cartList", "cartListLength"]),
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((prev, item) => prev + item.price * item.count, 0)
        .toFixed(2);
    },
    checkedLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
  },
  created() {
    let list = JSON.parse(localStorage.getItem("cartList")) || [];
    if (list) {
      this.setCartList(list);
    }
  },
  methods: {
    ...mapMutations(["setCartList"]),
    handleCheckedItem() {},
    handleCheckedAll() {},
    onSubmit() {},
  },
};
</script>
<style scoped>
.cart-list {
  width: 100%;
  height: 100%;
}

.scoll-heiht {
  position: absolute;
  top: 44px;
  bottom: 99px;
  left: 0;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}

.shop-item {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.shop-item:last-child {
  border-bottom: 0;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666;
}

.info-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.info-bottom .item-price {
  color: #ff5600;
}

.info-bottom .item-count {
  font-weight: 700;
  color: #000;
}

.cart-bottom-bar {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 15px;
  font-size: 15px;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
}

.cart-bottom-price span {
  color: red;
}

.cart-bottom-btn {
  display: flex;
  align-items: center;
}

.cart-bottom-btn button {
  height: 50px;
  line-height: 50px;
  border: none;
  padding: 0 15px;
  color: #fff;
  outline: none;
  background: linear-gradient(to right, #ff6034, #ee0a24);
}

.cart-bottom-btn button:active {
  opacity: 0.8;
}
</style>