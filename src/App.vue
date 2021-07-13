<template>
  <div id="app">
    <router-view />
    <main-tab-bar v-show="$store.getters.tabBarShow" />
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
