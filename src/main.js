import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from "./router";

const app = createApp(App);

app.component("icon", Icon);
app.use(router);
app.mount("#app");
