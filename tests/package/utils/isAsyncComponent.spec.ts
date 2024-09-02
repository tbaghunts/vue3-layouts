import { describe, expect, it } from "vitest";

import { isAsyncComponent } from "@/package/utils/isAsyncComponent";

describe("Utils = isAsyncComponent", () => {
  it("isAsyncComponent should return false if isn't a invokable parameter", () => {
    expect(undefined).toBeFalsy();
    expect(isAsyncComponent("component")).toBeFalsy();
    expect(isAsyncComponent({ name: "ComponentName" })).toBeFalsy();
  });

  it("isAsyncComponent should return true if is it a invokable parameter", () => {
    expect(isAsyncComponent(() => "invokable-component")).toBeTruthy();
  });
});
