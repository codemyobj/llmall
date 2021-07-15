<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  components: {},
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 开启点击事件 默认false
      click: true,
      // 0 1 无效 2 有效但不监听松开后 3 全部监听
      probeType: this.probeType,
      // 是否监听下拉到底部
      pullUpLoad: this.pullUpLoad,
    });

    // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("backTopScroll", position);
      });
    }

    // 监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // x：x轴的距离  y：y轴的距离，滚动的时间
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 刷新
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    // 结束上拉加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 获取滚的纵向距离
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    // 滚动到指定元素
    scrollToElement(el, time) {
      this.scroll.scrollToElement(el, time);
    },
  },
};
</script>
<style scoped>
</style>