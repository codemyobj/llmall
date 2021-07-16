<template>
  <div class="detail">
    <detail-nav-bar @titleItemClick="titleItemClick" ref="detailNavBar" />
  </div>
</template>

<script>
import DetailNavBar from "./children/DetailNavBar.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
  },
  props: {},
  data() {
    return {};
  },
  created() {
    //获取home传来的id
    this.detailId = this.$route.params.id;

    // 发送网络请求
  },
  methods: {
    titleItemClick(index) {
      console.log(index);
    },
  },
};
</script>
<style scoped>
</style>