<template>
  <div id="view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#view {
  font-family: "Jetbrains Mono", monospace, "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0f4c81;
  height: 100%;
}
</style>
