import { defineAsyncComponent } from "vue";
import type { AsyncComponentLoader, Component } from "vue";

import type {
  BaghuntsLayoutProvider,
  BaghuntsLayoutComponent,
  BaghuntsLayoutPluginOptions,
} from "./types";

export function createBaghuntsLayoutProvider(
  config?: BaghuntsLayoutPluginOptions,
): BaghuntsLayoutProvider {
  const getComponentOrDefault = (
    component?: BaghuntsLayoutComponent | string,
    defaultLayout?: BaghuntsLayoutComponent | string,
  ) => {
    if (!component && !!config?.default) {
      component = defaultLayout ?? config.default;
    }

    return component;
  };

  const getComponentByName = (component?: BaghuntsLayoutComponent | string) => {
    if (typeof component === "string" && !!config?.components) {
      component = config.components[component];
    }

    return component;
  };

  const evaluateAsyncDefinitionIfInvokable = (
    component?: BaghuntsLayoutComponent | string,
  ) => {
    if (isAsyncComponent(component)) {
      component = defineAsyncComponent(component);
    }

    return component;
  };

  return {
    getComponent(
      component?: BaghuntsLayoutComponent | string,
      defaultLayout?: BaghuntsLayoutComponent | string,
    ): Component | string {
      component = getComponentOrDefault(component, defaultLayout);
      component = getComponentByName(component);
      component = evaluateAsyncDefinitionIfInvokable(component);

      return component ?? "div";
    },
  };
}

function isAsyncComponent(
  component?: BaghuntsLayoutComponent | string,
): component is AsyncComponentLoader {
  return typeof component === "function";
}
