import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import Dashboard from "./views/Dashboard.vue";
import Overview from "./views/Overview.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/overview", component: Overview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
