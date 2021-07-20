<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的商城</div>
    </nav-bar>
    <scroll class="scroll-height">
      <login />
      <money />
      <div class="line"></div>
      <profile-list />
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import Login from "./children/Login.vue";
import Money from "./children/Money.vue";
import ProfileList from "./children/ProfileList.vue";

export default {
  name: "Profile",
  components: {
    NavBar,
    Scroll,
    Login,
    Money,
    ProfileList,
  },
  props: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.profile {
  width: 100%;
  height: 100%;
}

.nav-bar {
  background-color: #ff8198;
  color: #fff;
  font-weight: 700;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  bottom: 50px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>