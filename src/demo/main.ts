import { createApp } from "vue";

import { createBaghuntsLayout } from "../package";

import App from "./App.vue";
import router from "./router";
import baghuntsLayoutConfig from "./baghunts-layout";

createApp(App)
  .use(router)
  .use(createBaghuntsLayout(baghuntsLayoutConfig))
  .mount("#app");
