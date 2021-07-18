<template>
  <div class>
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车 (<span>{{ cartLength }}</span
        >)
      </div>
    </nav-bar>
    <cart-list />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import CartList from "./children/CartList.vue";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cartLength: "cartListLength",
    }),
  },
};
</script>
<style scoped>
.nav-bar {
  font-weight: 700;
  color: #fff;
  background-color: #ff8198;
}
</style>