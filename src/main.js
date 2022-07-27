import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";

const app = createApp(App).use(router);

// app.use(store); // vuex

app.mount("#app");
