<template>
  <div id="home">
    <!-- navbar -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
      :titles="tabControlTitles"
      @tabClick="tabClick"
      class="home-tab-control"
      ref="tabControl"
      v-show="isShow"
    />

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
      <tab-control
        :titles="tabControlTitles"
        @tabClick="tabClick"
        class="home-tab-control"
        ref="tabControl2"
      />
      <!-- 商品 -->
      <goods-list :goods="goods[curType].list" />
    </scroll>
    <!-- 回到顶部 -->
    <transition name="scroll">
      <back-top @click.native="backTop" v-show="curPosition >= 1500" />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "@/components/common/swiper/Swiper.vue";
import RecommendView from "./children/RecommendView.vue";
import FeatureView from "./children/FeatureView.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackTop from "@/components/content/backtop/BackTop.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

import { getHomeMultiData, getHomeGoodsData } from "@/network/home";
import { imgListenerMixin, backTopMixin } from "@/common/mixin";

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
    BackTop,
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
      // 当前吸顶的位置
      tabOffsetTop: 0,
      saveY: 0,
    };
  },
  mixins: [imgListenerMixin, backTopMixin],
  created() {
    this._getHomeMultiData();
    this._getHomeGoodsData("pop");
    this._getHomeGoodsData("new");
    this._getHomeGoodsData("sell");
  },
  // keep-alive 状态下进来的时候的生命周期
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.$bus.$off("imgLoad", this.imgListener);
    this.saveY = this.$refs.scroll.getCurrentY();
    console.log(this.saveY);
  },
  computed: {
    isShow() {
      return this.curPosition > this.tabOffsetTop;
    },
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
        // 调用finishPullUp可以一直加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.curType = "pop";
          break;
        case 1:
          this.curType = "new";
          break;
        case 2:
          this.curType = "sell";
          break;
      }
      this.$refs.tabControl.curIndex = index;
      this.$refs.tabControl2.curIndex = index;
    },
    backTopScroll(position) {
      this.curPosition = position ? -position.y : 0;
    },
    loadMore() {
      this._getHomeGoodsData(this.curType);
    },
    // 监听轮播图加载完成
    swiperLoad() {
      // 获取tabControl的位子
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
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

/* 导航吸顶 */
.home-tab-control {
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.scroll-height {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 50px;
}

/* vue的淡入淡出动画 */
.scroll-enter-active,
.scroll-leave-active {
  transition: all 0.3s;
}

.scroll-enter,
.scroll-leave-to {
  opacity: 0;
}

.scroll-enter-to,
.scroll-leave {
  opacity: 1;
}
</style>