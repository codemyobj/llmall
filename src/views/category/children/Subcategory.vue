<template>
  <div class="subcategory">
    <div
      class="category-detail-item"
      v-for="(item, index) in categoryList"
      :key="index"
    >
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";

export default {
  name: "Subcategory",
  components: {
    Scroll,
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.subcategory {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
}

.category-detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100px;
  margin-bottom: 10px;
}

.category-detail-item img {
  width: 65px;
  margin-bottom: 7px;
}

.category-detail-item p {
  font-size: 14px;
}
</style>