<script lang="ts">
import { ref } from "vue";
//import Nav from "@components/Navbar/Nav.vue";
import Sidebar from "@components/sidebar/Sidebar.vue";
import { sidebarType } from "@components/sidebar/state";

export default {
  components: {
    Sidebar,
  },
  setup() {
    let type = ref(sidebarType());
    const showSize = () => {
      type.value = sidebarType();
    };

    window.addEventListener("resize", showSize);

    return {
      type,
    };
  },
};
</script>

<template>
  <div
    class="bg-white h-full text-neutral-900 dark:text-zinc-100 dark:bg-neutral-900"
  >
    <div
      class="bg-white dark:bg-neutral-500/10 flex-none border-b p-2 border-neutral-300 dark:border-neutral-700/50 flex items-center"
    >
      <router-link to="/" class="pl-2">
        <img src="./assets/auri-texto.png" width="120" />
      </router-link>
    </div>
    <div class="flex h-full">
      <Sidebar v-if="type.normal && $route.meta.title !== 'Login'" />
      <main class="p-10 overflow-auto h-full w-full">
        <router-view />
      </main>
    </div>
  </div>
</template>
