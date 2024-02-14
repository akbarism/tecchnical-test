import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/overview",
    name: "Overview",
    component: () => import("../pages/Overview.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
