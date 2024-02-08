import { createApp } from "vue";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from "./router/main";

const app = createApp(App)

app.component("Icon", Icon)
app.use(router)
app.mount('#app')

