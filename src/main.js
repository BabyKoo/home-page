import { createApp } from "vue";
import App from "./App.vue";
import router from "/src/router/index.js";
import store from "/src/store/index.js";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(store).use(router).use(Antd).mount("#root");
