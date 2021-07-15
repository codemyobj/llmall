<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === curIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      curIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      if (this.curIndex === index) return;
      this.curIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
.tab-control {
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  font-size: 15px;
  padding: 5px;
}

.active {
  color: #ff5777;
}

.active span {
  border-bottom: 2px solid #ff5777;
}
</style>