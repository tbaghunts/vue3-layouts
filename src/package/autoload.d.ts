import type { BaghuntsLayoutComponent, BaghuntsLayoutProvider } from "./model";

declare module "vue-router" {
  interface RouteMeta {
    layout?: BaghuntsLayoutComponent | string;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $BaghuntsLayoutProvider: BaghuntsLayoutProvider;
  }

  interface GlobalComponents {
    BaghuntsLayoutProvider: typeof import("./ui/BaghuntsLayoutProvider.vue").default;
  }
}
