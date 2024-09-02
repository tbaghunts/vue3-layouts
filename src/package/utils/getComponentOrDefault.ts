import type {
  LayoutComponent,
  LayoutsProviderOptions,
  LayoutComponentEvaluated,
} from "../model/types";

export function getComponentOrDefault(
  this: LayoutsProviderOptions | undefined,
  component?: LayoutComponent | string,
  defaultLayout?: LayoutComponent | string,
): LayoutComponentEvaluated {
  if (!defaultLayout) {
    defaultLayout = this?.default;
  }

  return component ?? defaultLayout;
}
