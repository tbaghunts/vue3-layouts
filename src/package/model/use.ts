import { inject, hasInjectionContext } from "vue";

import type { LayoutsProviderInterface } from "./types";

export function useLayoutsProvider(): LayoutsProviderInterface {
  if (!hasInjectionContext()) {
    throw Error(
      "Layout Provider Context can only be accessed within a Component’s Context",
    );
  }

  return inject("baghunts:provider:layout")!;
}
