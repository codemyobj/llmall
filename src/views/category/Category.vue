<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <slide-bar
      :slide-bar-list="categoryList"
      @slideBarItemClick="slideBarItemClick"
    />
    <scroll class="scroll-height" ref="scroll">
      <subcategory :category-list="subcategoryList" />
      <tab-control :titles="titleList" @tabClick="tabClick" ref="tabControl" />
      <goods-list :goods="categoryDetailList" :goods-height="false" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import SlideBar from "./children/SlideBar.vue";
import Subcategory from "./children/Subcategory.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "@/network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    SlideBar,
    Subcategory,
    Scroll,
    TabControl,
    GoodsList,
  },
  props: {},
  data() {
    return {
      categoryList: [],
      subcategoryList: [],
      currentIndex: 0,
      titleList: ["流行", "新款", "精选"],
      categoryDetailList: [],
    };
  },
  created() {
    this._getCategory();
  },
  updated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        const data = res.data;
        this.categoryList = data.category.list;
        this.$nextTick(() => {
          this._getSubcategory(this.categoryList[0].maitKey);
          this._getCategoryDetail(
            this.categoryList[this.currentIndex].miniWallkey,
            "pop"
          );
        });
      });
    },
    _getSubcategory(key) {
      getSubcategory(key).then((res) => {
        this.subcategoryList = [...res.data.list];
      });
    },
    _getCategoryDetail(key, type) {
      getCategoryDetail(key, type).then((res) => {
        this.categoryDetailList = [...res];
      });
    },
    slideBarItemClick({ maitKey, index }) {
      if (this.currentIndex === index) return;
      this.currentIndex = index;
      this.$refs.tabControl.curIndex = 0;
      this._getCategoryDetail(
        this.categoryList[this.currentIndex].miniWallkey,
        "pop"
      );
      this._getSubcategory(maitKey);
      this.backTop();
    },
    tabClick(index) {
      const typeList = ["pop", "new", "sell"];
      this._getCategoryDetail(
        this.categoryList[this.currentIndex].miniWallkey,
        typeList[index]
      );
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
.category {
  width: 100%;
  height: 100%;
}

.nav-bar {
  background-color: #ff8198;
  color: #fff;
  font-weight: 700;
  position: relative;
  z-index: 10;
}

.scroll-height {
  position: fixed;
  right: 0;
  left: 100px;
  top: 44px;
  bottom: 50px;
  overflow: hidden;
}
</style>