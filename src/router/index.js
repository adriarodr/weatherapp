import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        showWeatherNav: false,
      }
    },
    {
      path: "/today",
      name: "today",
      component: () => import("@/views/CurrentWeatherView.vue"),
      meta: {
        showWeatherNav: true,
      },
    },
    {
      path: "/hourly",
      name: "hourly",
      component: () => import("@/views/HourlyForecastView.vue"),
      meta: {
        showWeatherNav: true,
      },
    },
    {
      path: "/forecast",
      name: "forecast",
      component: () => import("@/views/ForecastView.vue"),
      meta: {
        showWeatherNav: true,
      },
    },
  ],
});

export default router;
