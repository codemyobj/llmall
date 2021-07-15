<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  components: {},
  props: {
    recommend: {
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
.recommend {
  display: flex;
  padding: 15px 0;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.recommend-item img {
  width: 80px;
  height: 80px;
}

.recommend-item p {
  font-size: 15px;
  margin-top: 10px;
}
</style>