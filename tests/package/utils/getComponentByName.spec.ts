import { describe, expect, it } from "vitest";

import type { LayoutsProviderOptions } from "@/package/model";
import { getComponentByName } from "@/package/utils/getComponentByName";

const providerOptionsMock = {
  aliases: {
    a: "component-a",
    b: "component-b",
  },
} as unknown as LayoutsProviderOptions;

describe("Utils - getComponentByName", () => {
  it("Should return provided argument if it's not a string", () => {
    expect(
      getComponentByName.call(providerOptionsMock, { name: "ComponentName" }),
    ).toEqual({ name: "ComponentName" });

    const invokableComponent = () => "invokable-component";

    expect(
      getComponentByName.call(providerOptionsMock, invokableComponent),
    ).toEqual(invokableComponent);
  });

  it("Should return the argument, if ", () => {
    expect(
      getComponentByName.call({} as unknown as LayoutsProviderOptions, "a"),
    ).toEqual("a");
  });

  it("Should return the component alias definition", () => {
    expect(getComponentByName.call(providerOptionsMock, "a")).toEqual(
      "component-a",
    );
    expect(getComponentByName.call(providerOptionsMock, "b")).toEqual(
      "component-b",
    );
  });

  it("Should return undefined if alias isn't defined", () => {
    expect(getComponentByName.call(providerOptionsMock, "c")).toBeUndefined();
  });
});
