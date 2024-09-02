import type { LayoutsProviderOptions, LayoutComponent } from "../model/types";

export function getComponentByName(
  this: LayoutsProviderOptions | undefined,
  component?: LayoutComponent | string,
): LayoutComponent | string | undefined {
  if (typeof component === "string" && !!this?.aliases) {
    component = this.aliases[component];
  }

  return component;
}
