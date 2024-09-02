import type { AsyncComponentLoader } from "vue";

import type { LayoutComponent } from "../model/types";

export function isAsyncComponent(
  component?: LayoutComponent | string,
): component is AsyncComponentLoader {
  return typeof component === "function";
}
