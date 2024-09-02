import type { Component } from "vue";
import { defineAsyncComponent } from "vue";

import type {
  LayoutComponent,
  LayoutsProviderOptions,
  LayoutComponentEvaluated,
} from "../model/types";

import { isAsyncComponent } from "./isAsyncComponent";

export function evaluateAsyncDefinitionIfInvokable(
  this: LayoutsProviderOptions | void,
  component?: LayoutComponent | string,
): LayoutComponentEvaluated {
  if (isAsyncComponent(component)) {
    component = defineAsyncComponent<Component>(component);
  }

  return component;
}
