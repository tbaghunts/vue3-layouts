import { inject, hasInjectionContext } from "vue";

import type { BaghuntsLayoutProvider } from "./types";

export function useBaghuntsLayoutProvider(): BaghuntsLayoutProvider {
  if (!hasInjectionContext()) {
    throw Error(
      "Layout Provider Context can only be accessed within a Component’s Context",
    );
  }

  return inject("baghunts:provider:layout")!;
}
