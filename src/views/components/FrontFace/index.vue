<template>
  <div>
    <a-row class="main-content">
      <a-col
        v-for="item in spanColumns"
        :key="item.index"
        :style="{
          backgroundColor: item.backgroundColor,
          color: '#fffc',
          width: item.width,
        }"
        >{{ "T—" + item.index + " " + item.backgroundColor }}
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { columns } from "./dict";
export default {
  name: "FrontFace",
  created() {
    this.spanColumns = columns();
  },
  data() {
    return {
      spanColumns: [],
    };
  },
};
</script>

<style scoped>
.main-content {
  width: 100%;
  height: 100vh;
}
</style>
