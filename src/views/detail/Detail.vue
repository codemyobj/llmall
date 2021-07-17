<template>
  <div class="detail">
    <detail-nav-bar @titleItemClick="titleItemClick" ref="detailNavBar" />
    <scroll
      class="scroll-height"
      ref="scroll"
      :probe-type="3"
      @backTopScroll="detailScroll"
    >
      <detail-swiper :swiper-list="banner" @imgLoad="imgLoad" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import DetailNavBar from "./children/DetailNavBar.vue";
import DetailSwiper from "./children/DetailSwiper.vue";

import { getProductDetail } from "@/network/detail";
import { imgListenerMixin } from "@/common/mixin";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
  },
  props: {},
  data() {
    return {
      detailId: "",
      banner: [],
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
        this.banner = res.result.itemInfo.topImages;
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