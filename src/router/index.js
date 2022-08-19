import { createRouter, createWebHistory } from "vue-router";
import HomePage from "/src/views/HomePage.vue";
const DEFAULT_TITLE = "Hugo";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      meta: {
        title: "首页",
      },
    },
  ],
});
router.afterEach((to) => {
  document.title = to.meta.title
    ? to.meta.title + " - " + DEFAULT_TITLE
    : DEFAULT_TITLE;
});
export default router;
