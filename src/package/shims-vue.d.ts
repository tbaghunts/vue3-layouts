import type { LayoutComponent, LayoutsProvider } from "./model/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $layoutsProvider: LayoutsProvider;
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

export {};
