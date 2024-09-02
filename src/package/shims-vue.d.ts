import type { Router, RouteLocationNormalizedLoadedGeneric } from "vue-router";

import type { LayoutComponent, LayoutsProvider } from "./model/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $router: Router;
    $layoutsProvider: LayoutsProvider;
    $route: RouteLocationNormalizedLoadedGeneric;
  }

  interface GlobalComponents {
    LayoutsProvider: typeof import("./ui/LayoutsProvider.vue").default;
  }
}

declare module "vue-router" {
  interface RouteMeta {
    layout?: LayoutComponent | string;
  }
}
