<template>
  <div id="home">
    <!-- navbar -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- tabcontrol -->
    <scroll
      class="scroll-height"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @backTopScroll="backTopScroll"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <swiper :banners="banners" @swiperLoad="swiperLoad" />
      <!-- 推荐分类 -->
      <recommend-view :recommend="recommend" />
      <!-- 本周流行 -->
      <feature-view />
      <!-- tabControl -->
      <tab-control :titles="tabControlTitles" @tabClick="tabClick" />
      <!-- 商品 -->
      <goods-list :goods="goods[curType].list" />
    </scroll>

    <!-- 回到顶部 -->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "@/components/common/swiper/Swiper.vue";
import RecommendView from "./children/RecommendView.vue";
import FeatureView from "./children/FeatureView.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import Scroll from "@/components/common/scroll/Scroll.vue";

import { getHomeMultiData, getHomeGoodsData } from "@/network/home";
import { imgListenerMixin } from "@/common/mixin";

export default {
  name: "Home",
  components: {
    Scroll,
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  props: {},
  data() {
    return {
      banners: [],
      recommend: [],
      tabControlTitles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      curType: "pop",
      imgListener: null,
    };
  },
  mixins: [imgListenerMixin],
  created() {
    this._getHomeMultiData();
    this._getHomeGoodsData("pop");
    this._getHomeGoodsData("new");
    this._getHomeGoodsData("sell");
  },
  methods: {
    // 异步网络请求数据方法
    _getHomeMultiData() {
      getHomeMultiData().then((res) => {
        const data = res.data;
        this.banners = data.banner.list;
        this.recommend = data.recommend.list;
      });
    },
    _getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then((res) => {
        const data = res.data;
        this.goods[type].list.push(...data.list);
        this.goods[type].page += 1;
      });
    },
    tabClick() {},
    backTopScroll() {},
    loadMore() {
      this._getHomeGoodsData(this.curType);
    },
    swiperLoad() {},
  },
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100%;
}

#home .home-nav {
  font-weight: 600;
  color: #fff;
  background-color: #ff8198;
  position: relative;
  z-index: 9;
}

.scroll-height {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 50px;
}
</style>