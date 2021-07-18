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
      <detail-swiper :swiper-list="banner" class="detail-set-scroll" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shopInfo" />
      <detail-images-info :detail-images="detailInfo" @imgLoad="imgLoad" />
      <detail-params-info :paramsInfo="paramsInfo" class="detail-set-scroll" />
      <detail-comment-info
        :commentInfo="commentInfo"
        class="detail-set-scroll"
      />
      <goods-list
        :goods="recommendList"
        :is-recommend="true"
        class="detail-set-scroll"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import DetailNavBar from "./children/DetailNavBar.vue";
import DetailSwiper from "./children/DetailSwiper.vue";
import DetailBaseInfo from "./children/DetailBaseInfo.vue";
import DetailShopInfo from "./children/DetailShopInfo.vue";
import DetailImagesInfo from "./children/DetailImagesInfo.vue";
import DetailParamsInfo from "./children/DetailParamsInfo.vue";
import DetailCommentInfo from "./children/DetailCommentInfo.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import {
  getProductDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParams,
} from "@/network/detail";
import { imgListenerMixin } from "@/common/mixin";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
  },
  props: {},
  data() {
    return {
      detailId: "",
      banner: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendList: [],
      curPosition: 0,
      detailClassList: [],
      detailIndex: 0,
    };
  },
  mixins: [imgListenerMixin],
  created() {
    //获取home传来的id
    this.detailId = this.$route.params.id;

    // 发送网络请求
    this._getProductDetail(this.detailId);
    this._getRecommend();
  },
  methods: {
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
        //店铺基本数据
        this.shopInfo = new Shop(data.shopInfo);
        // 商品图片展示
        this.detailInfo = data.detailInfo;
        // 商品参数信息
        this.paramsInfo = new GoodsParams(
          data.itemParams.info,
          data.itemParams.rule || {}
        );
        //商品评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }
      });
    },
    _getRecommend() {
      getRecommend().then((res) => {
        this.recommendList = res.data.list;
      });
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getClassList();
    },
    detailScroll(position) {
      let detailPosition = position ? -position.y : 0;
      this.curPosition = detailPosition;

      for (let i = 0; i < this.detailClassList.length - 1; i++) {
        if (
          detailPosition >= this.detailClassList[i].offsetTop &&
          detailPosition < this.detailClassList[i + 1].offsetTop
        ) {
          if (this.detailIndex !== i) {
            this.detailIndex = i;
            this.$refs.detailNavBar.currentIndex = this.detailIndex;
          }
          break;
        }
      }
    },
    titleItemClick(index) {
      //根据数组下标滚动到对应的元素的位置
      this.$nextTick(() => {
        let el = document.getElementsByClassName("detail-set-scroll");
        this.$refs.scroll.scrollToElement(el[index], 300);
      });
    },
    // 获取calssList
    getClassList() {
      //把array.from() 把伪数组转换为数组
      this.detailClassList = [];
      this.detailClassList = Array.from(
        document.getElementsByClassName("detail-set-scroll")
      );
      let maxValue = 10000000;
      this.detailClassList.push({ offsetTop: maxValue });
      console.log(this.detailClassList);
    },
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