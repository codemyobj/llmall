<template>
  <div class="slide-bar">
    <scroll class="scroll-height" ref="scroll">
      <template v-for="(item, index) in slideBarList">
        <button
          :class="{ active: index === currentIndex }"
          class="slide-bar-item"
          :key="index"
          @click="slideBarClick(item, index)"
        >
          {{ item.title }}
        </button>
      </template>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";

export default {
  name: "SlideBar",
  components: {
    Scroll,
  },
  props: {
    slideBarList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  updated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    slideBarClick(item, index) {
      const obj = {
        maitKey: item.maitKey,
        index,
      };
      this.currentIndex = index;
      this.$emit("slideBarItemClick", obj);
    },
  },
};
</script>
<style scoped>
.slide-bar {
  width: 100%;
  height: 100%;
}

.scroll-height {
  position: fixed;
  left: 0;
  width: 100px;
  top: 44px;
  bottom: 50px;
  background-color: #f6f6f6;
}

.slide-bar-item {
  font-size: 14px;
  line-height: 45px;
  width: 100px;
  height: 45px;
  user-select: none;
  outline: none;
  border: none;
  background: none;
  color: #666;
  text-align: center;
}

.slide-bar-item.active {
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background-color: #fff;
  font-weight: 700;
}
</style>