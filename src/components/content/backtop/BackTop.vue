<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  components: {},
  props: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.back-top {
  position: fixed;
  z-index: 10;
  right: 20px;
  bottom: 70px;
}

.back-top img {
  width: 50px;
  height: 50px;
}
</style>