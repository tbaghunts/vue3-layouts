import { defineAsyncComponent } from "vue";
import type { AsyncComponentLoader, Component } from "vue";

import type {
  LayoutComponent,
  LayoutsProvider,
  LayoutsProviderOptions,
} from "./types";

export function useLayoutsProvider(
  config?: LayoutsProviderOptions,
): LayoutsProvider {
  const getComponentOrDefault = (
    component?: LayoutComponent | string,
    defaultLayout?: LayoutComponent | string,
  ) => {
    if (!component && !!config?.default) {
      component = defaultLayout ?? config.default;
    }

    return component;
  };

  const getComponentByName = (component?: LayoutComponent | string) => {
    if (typeof component === "string" && !!config?.aliases) {
      component = config.aliases[component];
    }

    return component;
  };

  const evaluateAsyncDefinitionIfInvokable = (
    component?: LayoutComponent | string,
  ) => {
    if (isAsyncComponent(component)) {
      component = defineAsyncComponent(component);
    }

    return component;
  };

  return {
    getComponent(
      component?: LayoutComponent | string,
      defaultLayout?: LayoutComponent | string,
    ): Component | string {
      component = getComponentOrDefault(component, defaultLayout);
      component = getComponentByName(component);
      component = evaluateAsyncDefinitionIfInvokable(component);

      return component ?? "div";
    },
    getConfig() {
      return config;
    }
  };
}

function isAsyncComponent(
  component?: LayoutComponent | string,
): component is AsyncComponentLoader {
  return typeof component === "function";
}
