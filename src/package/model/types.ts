import type { AsyncComponentLoader, Component } from "vue";

export type BaghuntsLayoutComponent = Component | AsyncComponentLoader;

export interface BaghuntsLayoutPluginOptions {
  default?: BaghuntsLayoutComponent | string;
  components: Record<string, BaghuntsLayoutComponent>;
}

export interface BaghuntsLayoutProvider {
  getComponent(
    component?: BaghuntsLayoutComponent | string,
    defaultLayout?: BaghuntsLayoutComponent | string,
  ): Component | string;
}

export interface BaghuntsLayoutProviderProps {
  default?: BaghuntsLayoutComponent | string;
}
