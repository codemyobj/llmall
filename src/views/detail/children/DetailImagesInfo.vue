<template>
  <div class="image-info" v-if="Object.keys(detailImages).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailImages.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item, index) in detailImages.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div
        class="info-list"
        v-for="(image, imageIndex) in item.list"
        :key="imageIndex"
        @load="imgLoad"
      >
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImagesInfo",
  components: {},
  props: {
    detailImages: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      count: 0,
      imagesLength: 0,
    };
  },
  methods: {
    // 防抖处理 等图片全部加载完再发射事件
    imgLoad() {
      if (++this.count === this.imagesLength) {
        this.$bus.$emit("imgLoad");
      }
    },
  },
  watch: {
    detailImages() {
      this.imagesLength = this.detailImages.detailImage[0].list.length;
    },
  },
};
</script>
<style scoped>
.image-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  position: relative;
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  content: "";
  background-color: #333;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  font-size: 14px;
  padding: 15px 0;
}

.info-key {
  font-size: 15px;
  margin: 10px 0 10px 15px;
  color: #ff5777;
  font-weight: 700;
}

.info-list {
  font-size: 15px;
  padding: 3px 15px;
}

.info-list img {
  width: 100%;
}
</style>