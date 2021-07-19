<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "Category",
  components: {
    NavBar,
  },
  props: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: #ff8198;
  font-weight: 700;
  color: #fff;
}
</style>