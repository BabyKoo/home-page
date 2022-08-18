import { createRouter, createWebHistory } from "vue-router";
import HomePage from "/src/views/HomePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      meta: {
        title: "首页"
      },
    },
  ],
});
export default router;
