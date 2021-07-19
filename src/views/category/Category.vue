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
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import SlideBar from "./children/SlideBar.vue";
import Subcategory from "./children/Subcategory.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

import { getCategory, getSubcategory } from "@/network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    SlideBar,
    Subcategory,
    Scroll,
  },
  props: {},
  data() {
    return {
      categoryList: [],
      subcategoryList: [],
      currentIndex: 0,
    };
  },
  created() {
    this._getCategory();
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$store.commit("setLoading", true);
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        const data = res.data;
        this.categoryList = data.category.list;
        this.$nextTick(() => {
          this._getSubcategory(this.categoryList[0].maitKey);
        });
      });
    },
    _getSubcategory(key) {
      getSubcategory(key).then((res) => {
        this.subcategoryList = [...res.data.list];
      });
    },
    slideBarItemClick({ maitKey, index }) {
      if (this.currentIndex === index) return;
      this.currentIndex = index;
      this._getSubcategory(maitKey);
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