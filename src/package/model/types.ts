import type { AsyncComponentLoader, Component } from "vue";

export type LayoutComponent = Component | AsyncComponentLoader;

export interface LayoutsProviderOptions {
  default?: LayoutComponent | string;
  aliases: Record<string, LayoutComponent>;
}

export interface LayoutsProvider {
  getComponent(
    component?: LayoutComponent | string,
    defaultLayout?: LayoutComponent | string,
  ): Component | string;
  getConfig(): LayoutsProviderOptions | undefined;
}

export interface LayoutsProviderProps {
  default?: LayoutComponent | string;
}
