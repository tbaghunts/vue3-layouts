import type { Router, RouteLocationNormalizedLoadedGeneric } from "vue-router";

import LayoutsProvider from "./ui/LayoutsProvider.vue";
import type { LayoutComponent, LayoutsProviderInterface } from "./model/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $router: Router;
    $layoutsProvider: LayoutsProviderInterface;
    $route: RouteLocationNormalizedLoadedGeneric;
  }

  interface GlobalComponents {
    LayoutsProvider: typeof LayoutsProvider;
  }
}

declare module "vue-router" {
  interface RouteMeta {
    layout?: LayoutComponent | string;
  }
}
