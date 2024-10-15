import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import axios from "axios";
import router from "./router/index";

const app = createApp(App);

// Tambahkan Axios ke global properties
app.config.globalProperties.$axios = axios;

app.use(router);

app.mount("#app");
