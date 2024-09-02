import { beforeEach, type MockInstance } from "vitest";
import { it, vi, expect, describe, afterEach } from "vitest";

import { defineAsyncComponent } from "vue";

import { isAsyncComponent } from "@/package/utils/isAsyncComponent";
import { evaluateAsyncDefinitionIfInvokable } from "@/package/utils/evaluateAsyncDefinitionIfInvokable";

vi.mock("vue", () => ({
  defineAsyncComponent: vi.fn(),
}));

vi.mock("@/package/utils/isAsyncComponent", () => ({
  isAsyncComponent: vi.fn(),
}));

describe("Utils - evaluateAsyncDefinitionIfInvokable", () => {
  let spyIsAsyncComponent: MockInstance, spyDefineAsyncComponent: MockInstance;

  beforeEach(() => {
    spyIsAsyncComponent = isAsyncComponent as unknown as MockInstance;
    spyDefineAsyncComponent = defineAsyncComponent as unknown as MockInstance;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Component should not be wrapped with defineAsyncComponent if is not an async component", () => {
    spyIsAsyncComponent.mockReturnValue(false);

    expect(evaluateAsyncDefinitionIfInvokable("component")).toEqual(
      "component",
    );
    expect(spyDefineAsyncComponent).not.toHaveBeenCalledWith("component");
  });

  it("Component should be wrapped with defineAsyncComponent if is an async component", () => {
    spyIsAsyncComponent.mockReturnValue(true);
    spyDefineAsyncComponent.mockReturnValue("async-component-definition");

    expect(evaluateAsyncDefinitionIfInvokable("component")).toEqual(
      "async-component-definition",
    );
    expect(spyDefineAsyncComponent).toHaveBeenCalledWith("component");
  });
});
