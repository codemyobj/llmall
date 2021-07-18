<template>
  <div class="cart-list">
    <scroll class="scoll-heiht"> </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList", "cartListLength"]),
  },
};
</script>
<style scoped>
</style>