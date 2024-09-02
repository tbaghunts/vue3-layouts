import { vi, test, expect } from "vitest";

import * as modelUtils from "@/package/model";

test("Model - index should export useful methods", () => {
  expect(Object.keys(modelUtils)).toContain(["a", "b", "c"]);
});
