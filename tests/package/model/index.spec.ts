import { expect, test } from "vitest";

import * as modelIndex from "@/package/model";

test("Model - index should export useful methods", () => {
  expect(Object.keys(modelIndex)).toEqual(["createProvider"]);
});
