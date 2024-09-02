import type { App, ObjectPlugin } from "vue";

import { LayoutsProvider } from "./ui";
import { createLayoutsProvider, type LayoutsProviderOptions } from "./model";

export function createBaghuntsLayout(
  config?: LayoutsProviderOptions,
): ObjectPlugin {
  return {
    install: (app: App) => {
      const provider = createLayoutsProvider(config);

      app.provide("baghunts:provider:layout", provider);
      app.config.globalProperties.$baghuntsLayoutsProvider = provider;

      app.component("LayoutsProvider", LayoutsProvider);
    },
  };
}
