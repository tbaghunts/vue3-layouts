import { LayoutConfig } from "./layouts";
import type { LayoutsProviderOptions } from "../package/model";

export default {
  components: LayoutConfig,
  default: () => import("./layouts/LayoutDefault.vue"),
} as LayoutsProviderOptions;
