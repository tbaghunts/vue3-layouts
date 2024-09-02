import { beforeEach, describe, expect, it, MockInstance, vi } from "vitest";

import {
  createProvider,
  LayoutsProviderInterface,
  LayoutsProviderOptions,
} from "@/package/model";
import * as utilsIndex from "@/package/utils";

vi.mock("@/package/utils", () => ({
  getComponentByName: vi.fn(),
  getComponentOrDefault: vi.fn(),
  evaluateAsyncDefinitionIfInvokable: vi.fn(),
}));

describe("Model - createProvider", () => {
  let spyGetComponentByName: MockInstance,
    spyGetComponentOrDefault: MockInstance,
    spyEvaluateAsyncDefinitionIfInvokable: MockInstance;

  let provider: LayoutsProviderInterface;

  beforeEach(() => {
    spyGetComponentByName = vi.spyOn(utilsIndex, "getComponentByName");
    spyGetComponentOrDefault = vi.spyOn(utilsIndex, "getComponentOrDefault");
    spyEvaluateAsyncDefinitionIfInvokable = vi.spyOn(
      utilsIndex,
      "evaluateAsyncDefinitionIfInvokable",
    );

    provider = createProvider({
      default: "default",
      aliases: { a: "component-a" },
    } as unknown as LayoutsProviderOptions);
  });

  it("getConfig should return actual result", () => {
    expect(createProvider().getConfig()).toBeUndefined();
    expect(provider.getConfig()).toEqual({
      default: "default",
      aliases: { a: "component-a" },
    });
  });

  it("getComponent should return div if didn't find alias", () => {
    spyGetComponentByName.mockReturnValue(undefined);
    spyGetComponentOrDefault.mockReturnValue(undefined);
    spyEvaluateAsyncDefinitionIfInvokable.mockReturnValue(undefined);

    expect(provider.getComponent("a")).toEqual("div");
  });

  it("getComponent should return alias", () => {
    spyEvaluateAsyncDefinitionIfInvokable.mockReturnValue(
      "component-evaluated",
    );

    expect(provider.getComponent("a")).toEqual("component-evaluated");
  });
});
