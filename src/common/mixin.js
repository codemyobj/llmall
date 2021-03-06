import { debounce } from "./utils";

export const imgListenerMixin = {
  data() {
    return {
      imgListener: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);

    this.imgListener = () => {
      refresh();
    };
    this.$bus.$on("imgLoad", this.imgListener);
  },
}

export const backTopMixin = {
  data() {
    return {
      curPosition: 0
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}