import { createApp } from "vue";

import { createLayoutsProvider } from "../package";

import App from "./App.vue";
import router from "./router";
import baghuntsLayoutConfig from "./baghunts-layout";

createApp(App)
  .use(router)
  .use(createLayoutsProvider(baghuntsLayoutConfig))
  .mount("#app");
