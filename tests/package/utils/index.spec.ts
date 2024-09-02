import { test, expect } from "vitest";

import * as utilsIndex from "@/package/utils";

test("Utils - index should export useful methods", () => {
  expect(Object.keys(utilsIndex)).toEqual([
    "getComponentByName",
    "getComponentOrDefault",
    "evaluateAsyncDefinitionIfInvokable",
  ]);
});
