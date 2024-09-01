import type { App, ObjectPlugin } from "vue";

import { BaghuntsLayoutProvider } from "./ui";
import {
  createBaghuntsLayoutProvider,
  type BaghuntsLayoutPluginOptions,
} from "./model";

export function createBaghuntsLayout(
  config?: BaghuntsLayoutPluginOptions,
): ObjectPlugin {
  return {
    install: (app: App) => {
      const provider = createBaghuntsLayoutProvider(config);

      app.provide("baghunts:provider:layout", provider);
      app.config.globalProperties.$baghuntsBaghuntsLayoutProvider = provider;

      app.component("BaghuntsLayoutProvider", BaghuntsLayoutProvider);
    },
  };
}
