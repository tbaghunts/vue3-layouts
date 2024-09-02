import type { App, ObjectPlugin } from "vue";

import { LayoutsProvider } from "./ui";
import { createProvider } from "./model";
import type { LayoutsProviderOptions } from "./model";

export function createLayoutsProvider(
  config?: LayoutsProviderOptions,
): ObjectPlugin {
  return {
    install: (app: App) => {
      const provider = createProvider(config);

      app.provide("baghunts:provider:layout", provider);
      app.config.globalProperties.$layoutsProvider = provider;

      app.component("LayoutsProvider", LayoutsProvider);
    },
  };
}
