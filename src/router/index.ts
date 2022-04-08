import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/v-deep",
      name: "v-deep",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/Basic/V-Deep.vue"),
    },

    {
      path: "/textInterpolation",
      name: "textInterpolation",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/Basic/TextInterpolation.vue"),
    },
    {
      path: "/v-html",
      name: "v-html",
      component: () => import("../components/Basic/V-Html.vue"),
    },
    {
      path: "/v-bind",
      name: "v-bind",
      component: () => import("../components/Basic/V-Bind.vue"),
    },
    {
      path: "/v-on",
      name: "v-on",
      component: () => import("../components/Basic/V-On.vue"),
    },
  ],
});

export default router;
