<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div class="back-img" slot="left" @click="backHomePage">
        <img src="~@/assets/img/common/back.svg" alt="" />
      </div>
      <div class="title" slot="center">
        <span
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="titleItemClick(index)"
          class="title-item"
          v-for="(item, index) in titles"
        >
          {{ item }}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  props: {},
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleItemClick(index) {
      this.currentIndex = index;
      this.$emit("titleItemClick", index);
    },
    backHomePage() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.back-img {
  text-align: center;
}

.back-img img {
  width: 22px;
  margin-top: 11px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-item {
  flex: 1;
  font-size: 15px;
}

.active {
  color: #ff5777;
}
</style>