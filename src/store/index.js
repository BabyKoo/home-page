import { createStore } from "vuex";
/** Files below modules directory */
const modulesFiles = require.context("./modules", true, /.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^.\/(.*)\.js/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});
const store = createStore({
  state: {},
  actions: {},
  mutaions: {},
  modules: modules,
  getters: {},
});
export default store;
