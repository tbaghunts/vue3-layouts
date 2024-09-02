import type { Component } from "vue";

import type {
  LayoutComponent,
  LayoutsProvider,
  LayoutsProviderOptions,
} from "./types";

import {
  getComponentByName,
  getComponentOrDefault,
  evaluateAsyncDefinitionIfInvokable,
} from "../utils";

export function useLayoutsProvider(
  config?: LayoutsProviderOptions,
): LayoutsProvider {
  return {
    getComponent(
      component?: LayoutComponent | string,
      defaultLayout?: LayoutComponent | string,
    ): Component | string {
      component = getComponentOrDefault.call(config, component, defaultLayout);
      component = getComponentByName.call(config, component);
      component = evaluateAsyncDefinitionIfInvokable.call(config, component);

      return component ?? "div";
    },
    getConfig(): LayoutsProviderOptions | undefined {
      return config;
    },
  };
}
