import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router";
import "./assets/css/input.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretDown);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
