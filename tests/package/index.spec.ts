import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { createLayoutsProvider } from "@/package";

vi.mock("@/package/ui", () => ({
  LayoutsProvider: "LayoutsProvider",
}));

vi.mock("@/package/model", () => ({
  createProvider: vi.fn(() => "createProvider"),
}));

const INJECT_KEYWORD: string = "baghunts:provider:layout";

let wrapper: VueWrapper;

describe("Package - createLayoutsProvider", () => {
  beforeEach(() => {
    const plugin = createLayoutsProvider({
      default: "component-default",
      aliases: {
        a: "component-a",
        b: "component-b",
      },
    });

    wrapper = mount(
      {
        template: "<span>test</span>",
      },
      {
        global: {
          plugins: [plugin],
        },
      },
    );
  });

  it("Config global property $layoutsProvider should be added", () => {
    expect((wrapper.vm as any).$layoutsProvider).toEqual("createProvider");
  });

  it("Service should be registered in DI Container", () => {
    expect(
      wrapper.getCurrentComponent().appContext.provides[INJECT_KEYWORD],
    ).toEqual("createProvider");
  });

  it("LayoutsProvider component should be registered globally", () => {
    expect(
      wrapper.getCurrentComponent().appContext.components["LayoutsProvider"],
    ).toEqual("LayoutsProvider");
  });
});
