import { LayoutConfig } from "./layouts";
import type { BaghuntsLayoutPluginOptions } from "../package/model";

export default {
  components: LayoutConfig,
  default: () => import("./layouts/LayoutDefault.vue"),
} as BaghuntsLayoutPluginOptions;
