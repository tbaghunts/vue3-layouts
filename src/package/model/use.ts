import { inject, hasInjectionContext } from "vue";

import type { LayoutsProvider } from "./types";

export function useLayoutsProvider(): LayoutsProvider {
  if (!hasInjectionContext()) {
    throw Error(
      "Layout Provider Context can only be accessed within a Component’s Context",
    );
  }

  return inject("baghunts:provider:layout")!;
}
