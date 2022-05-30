import { createApp } from "vue";
import "./tailwind.css";
import App from "./App.vue";
import router from "./router/index";
import "flowbite";
import vClickOutside from "click-outside-vue3";

// Import GlobalComponents
import Title from "@components/Title.vue";
import Section from "@components/Section.vue";
import Skeleton from "@components/Skeleton.vue";

import Input from "@components/Input.vue";
import Button from "@components/Button.vue";

const app = createApp(App);

//Declare Global Components
app.component("Title", Title);
app.component("Section", Section);
app.component("Skeleton", Skeleton);
app.component("Input", Input);
app.component("Button", Button);

app.use(router);
app.use(vClickOutside);
app.mount("#app");
