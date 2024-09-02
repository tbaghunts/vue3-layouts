import { createRouter, createWebHistory } from "vue-router";

import { PageA, PageB, PageC, PageHome } from "./pages";
import TwoSidebarLayout from "./layouts/TwoSidebarLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: PageHome,
    },
    {
      path: "/left-sidebar",
      component: PageA,
      meta: {
        layout: "LeftSidebarLayout",
      },
    },
    {
      path: "/right-sidebar",
      component: PageB,
      meta: {
        layout: "RightSidebarLayout",
      },
    },
    {
      path: "/two-sidebar",
      component: PageC,
      meta: {
        layout: TwoSidebarLayout,
      },
    },
    {
      path: "/grouped",
      meta: {
        layout: () => import("./layouts/TwoSidebarLayout.vue"),
      },
      children: [
        {
          path: "two-sidebar",
          component: () => import("./pages/GroupedPageA.vue"),
        },
        {
          path: "right-sidebar",
          component: () => import("./pages/GroupedPageB.vue"),
          meta: {
            layout: 'RightSidebarLayout',
          }
        }
      ]
    }
  ],
});

export default router;
