import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "today",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/hourly",
      name: "hourly",
      component: () => import("@/views/HourlyForecastView.vue"),
    },
    {
      path: "/forecast",
      name: "forecast",
      component: () => import("@/views/ForecastView.vue"),
    },
  ],
});

export default router;
