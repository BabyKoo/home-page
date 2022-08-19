<!--
 - Root Component
-->
<template>
  <div id="view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    window.vue = this;
  },
  components: {},
};
</script>

<style lang="less">
@import "./style/index.less";
#view {
  font-family: "Jetbrains Mono", monospace, "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: @main-color;
  color: @main-text-color;
  height: 100%;
}
</style>
