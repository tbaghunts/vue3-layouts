import type { AsyncComponentLoader, Component } from "vue";

export type LayoutComponent = Component | AsyncComponentLoader;

export type LayoutComponentEvaluated = LayoutComponent | string | undefined;

export interface LayoutsProviderOptions {
  default?: LayoutComponent | string;
  aliases: Record<string, LayoutComponent>;
}

export interface LayoutsProviderInterface {
  getComponent(
    component?: LayoutComponent | string,
    defaultLayout?: LayoutComponent | string,
  ): Component | string;
  getConfig(): LayoutsProviderOptions | undefined;
}

export interface LayoutsProviderProps {
  default?: LayoutComponent | string;
}
