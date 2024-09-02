import * as vue from "vue";
import {
  it,
  vi,
  expect,
  describe,
  afterEach,
  beforeEach,
  MockInstance,
} from "vitest";

import { useLayoutsProvider } from "@/package/model/use";

vi.mock("vue", () => ({
  inject: vi.fn(),
  hasInjectionContext: vi.fn(),
}));

const INJECT_KEYWORD: string = "baghunts:provider:layout";

describe("Model - useLayoutsProvider", () => {
  let spyInject: MockInstance, spyHasInjectionContext: MockInstance;

  beforeEach(() => {
    spyInject = vi.spyOn(vue, "inject");
    spyHasInjectionContext = vi.spyOn(vue, "hasInjectionContext");
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Should throw error if is not a injectable context", () => {
    spyHasInjectionContext.mockReturnValue(false);

    expect(() => useLayoutsProvider()).toThrowError(
      "Layout Provider Context can only be accessed within a Component’s Context",
    );
  });

  it("Should throw error if is not a injectable context", () => {
    spyInject.mockReturnValue("layouts-provider");
    spyHasInjectionContext.mockReturnValue(true);

    expect(useLayoutsProvider()).toEqual("layouts-provider");
    expect(spyInject).toHaveBeenCalledWith(INJECT_KEYWORD);
  });
});
