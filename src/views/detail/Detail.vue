<template>
  <div class="detail">
    <detail-nav-bar
      @titleItemClick="titleItemClick"
      ref="detailNavBar"
      class="detail-nav"
    />
    <scroll
      class="scroll-height"
      ref="scroll"
      :probe-type="3"
      @backTopScroll="detailScroll"
    >
      <detail-swiper :swiper-list="banner" @imgLoad="imgLoad" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shopInfo" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import DetailNavBar from "./children/DetailNavBar.vue";
import DetailSwiper from "./children/DetailSwiper.vue";
import DetailBaseInfo from "./children/DetailBaseInfo.vue";
import DetailShopInfo from "./children/DetailShopInfo.vue";

import { getProductDetail, Goods, Shop } from "@/network/detail";
import { imgListenerMixin } from "@/common/mixin";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  props: {},
  data() {
    return {
      detailId: "",
      banner: [],
      goods: {},
      shopInfo: {},
    };
  },
  mixins: [imgListenerMixin],
  created() {
    //获取home传来的id
    this.detailId = this.$route.params.id;

    // 发送网络请求
    this._getProductDetail(this.detailId);
  },
  methods: {
    titleItemClick(index) {
      console.log(index);
    },
    _getProductDetail(iid) {
      getProductDetail(iid).then((res) => {
        const data = res.result;
        console.log(data);
        // 轮播图数据
        this.banner = data.itemInfo.topImages;
        // 商品基本数据
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //商品基本数据
        this.shopInfo = new Shop(data.shopInfo);
      });
    },
    imgLoad() {
      this.$refs.scroll.refresh();
    },
    detailScroll() {},
  },
};
</script>
<style scoped>
.detail {
  width: 100%;
  height: 100%;
}

.detail-nav {
  position: relative;
  z-index: 10;
  background-color: #fff;
}

.scroll-height {
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
}
</style>