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
import ChevronDown from "@components/icons/ChevronDown.vue";
import ChevronLeft from "@components/icons/ChevronLeft.vue";
import ChevronRight from "@components/icons/ChevronRight.vue";
import ChevronUp from "@components/icons/ChevronUp.vue";
import Edit from "@components/icons/Edit.vue";
import Eye from "@components/icons/Eye.vue";
import EyeClose from "@components/icons/EyeClose.vue";
import Info from "@components/icons/Info.vue";
import New from "@components/icons/New.vue";
import Question from "@components/icons/Question.vue";
import Save from "@components/icons/Save.vue";
import Input from "@components/Input.vue";
import Button from "@components/Button.vue";
import Card from "@components/Card.vue";
import Avatar from "@components/Avatar.vue";

const app = createApp(App);

//Declare Global Components
app.component("Title", Title);
app.component("Section", Section);
app.component("Skeleton", Skeleton);
app.component("Input", Input);
app.component("Button", Button);
app.component("Card", Card);
app.component("Avatar", Avatar);
app.component("UnderConstruction", UnderConstruction);

//Declare Global icons
app.component("Search", Search);
app.component("Delete", Delete);
app.component("MenuToggle", MenuToggle);
app.component("Copy", Copy);
app.component("ChevronDown", ChevronDown);
app.component("ChevronLeft", ChevronLeft);
app.component("ChevronRight", ChevronRight);
app.component("ChevronUp", ChevronUp);
app.component("Edit", Edit);
app.component("Eye", Eye);
app.component("EyeClose", EyeClose);
app.component("Info", Info);
app.component("New", New);
app.component("Question", Question);
app.component("Save", Save);


app.use(router);
app.use(vClickOutside);
app.mount("#app");
