<template>
  <div>
    <a-row class="main-content">
      <a-col
        v-for="item in spanColumns"
        :key="item.index"
        class="column"
        :id="'col-' + item.index"
        :style="{ backgroundColor: item.backgroundColor, width: item.width }"
      >
        <!-- {{ "T—" + item.index + " " + item.backgroundColor }} -->
        <a-row
          v-if="item.index === 7"
          type="flex"
          align="middle"
          justify="center"
          :style="{ minHeight: '100vh' }"
        >
          <a-col flex="flex" span="24" class="menu-item"></a-col>
          <a-col flex="flex" span="24" class="menu-item">Coming soon...</a-col>
          <a-col flex="flex" span="24" class="menu-item"></a-col>
        </a-row>
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
  computed: {},
};
</script>

<style lang="less" scoped>
@import "/src/style/index.less";
@keyframes widths {
  0% {
    width: 0px;
  }
}
.main-content {
  width: 100%;
  height: 100vh;
}
.column {
  color: @main-text-color;
  animation: widths 0.6s ease-out 0s;
}
.column:hover {
  background-color: @main-color;
}
.menu-item {
  height: 10%;
}
</style>
