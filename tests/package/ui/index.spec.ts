import { expect, test } from "vitest";

import * as uiIndex from "@/package/ui";

test("UI - index should export useful components", () => {
  expect(Object.keys(uiIndex)).toEqual(["LayoutsProvider"]);
});
