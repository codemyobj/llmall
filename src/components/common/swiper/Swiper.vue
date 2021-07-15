<template>
  <div class="swiper-list">
    <van-swipe :autoplay="4000" indicator-color="#ff0000">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.image" @load="swiperLoad" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  components: {},
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: true,
    };
  },
  methods: {
    swiperLoad() {
      if (this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad = false;
      }
    },
  },
};
</script>
<style scoped>
.swiper-list /deep/ .van-swipe__indicator {
  width: 10px;
  height: 10px;
  opacity: 0.8;
  background-color: #fff;
}

.swiper-list {
  overflow: hidden;
  width: 100%;
}

.swiper-list img {
  width: 100%;
  display: block;
}
</style>