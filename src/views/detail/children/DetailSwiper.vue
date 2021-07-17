<template>
  <div class="swiper-list" v-if="Object.keys(swiperList).length !== 0">
    <van-swipe :autoplay="4000" indicator-color="#ff0000">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item" alt="" @load="imgLoad" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "DetailSwiper",
  components: {},
  props: {
    swiperList: {
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
    imgLoad() {
      if (this.isLoad) {
        this.$emit("imgLoad");
        this.isShow = false;
      }
    },
  },
};
</script>
<style scoped>
.swiper-list >>> .van-swipe__indicator {
  width: 10px;
  height: 10px;
  opacity: 0.8;
  background-color: #fff;
}

.swiper-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.swiper-list img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center top;
}
</style>