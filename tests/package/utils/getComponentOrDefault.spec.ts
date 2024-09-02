import { describe, expect, it } from "vitest";

import type { LayoutsProviderOptions } from "@/src/package/model";
import { getComponentOrDefault } from "@/package/utils/getComponentOrDefault";

const providerOptionsMock = {
  default: "component-default",
} as unknown as LayoutsProviderOptions;

describe("Utils - getComponentOrDefault", () => {
  it("Should return default defined component", () => {
    expect(getComponentOrDefault.call(providerOptionsMock)).toEqual(
      "component-default",
    );
  });

  it("Should return default provided as argument component", () => {
    expect(
      getComponentOrDefault.call(
        {} as unknown as LayoutsProviderOptions,
        undefined,
        "component-arg",
      ),
    ).toEqual("component-arg");

    expect(
      getComponentOrDefault.call(
        providerOptionsMock,
        undefined,
        "component-arg",
      ),
    ).toEqual("component-arg");
  });

  it("Should return component component", () => {
    expect(
      getComponentOrDefault.call(
        providerOptionsMock,
        "component",
        "component-arg",
      ),
    ).toEqual("component");
  });
});
