import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import './assets/index.css'
import VueClipboard from 'vue-clipboard2'

const app = createApp(App);
app.use(VueClipboard)

app.use(router);

app.mount("#app");
