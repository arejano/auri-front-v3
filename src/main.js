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
import UnderConstruction from "@components/UnderConstruction.vue";

// Import GlobalIcons
import Search from "@components/icons/Search.vue";
import Delete from "@components/icons/Delete.vue";
import MenuToggle from "@components/icons/MenuToggle.vue";
import Copy from "@components/icons/Copy.vue";

import Input from "@components/Input.vue";
import Button from "@components/Button.vue";

const app = createApp(App);

//Declare Global Components
app.component("Title", Title);
app.component("Section", Section);
app.component("Skeleton", Skeleton);
app.component("Input", Input);
app.component("Button", Button);
app.component("UnderConstruction", UnderConstruction);

//Declare Global icons
app.component("Search", Search);
app.component("Delete", Delete);
app.component("MenuToggle", MenuToggle);
app.component("Copy", Copy);

app.use(router);
app.use(vClickOutside);
app.mount("#app");
