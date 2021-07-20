<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "#ff0000",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
}
.tab-bar-item img {
  width: 25%;
}
.tab-bar-item div {
  font-size: 13px;
}
.active {
  color: red;
}
</style>