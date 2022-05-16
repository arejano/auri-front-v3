<script lang="ts">
import { ref } from "vue";
//import Nav from "@components/Navbar/Nav.vue";
import Sidebar from "@components/sidebar/Sidebar.vue";
import NavMenu from "@components/navmenu/Nav.vue";
import { sidebarType } from "@components/sidebar/state";

export default {
  components: {
    Sidebar,
    NavMenu,
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
    <NavMenu />
    <div class="flex h-full">
      <Sidebar v-if="type.normal && $route.meta.title !== 'Login'" />
      <main class="p-10 overflow-auto h-full w-full">
        <router-view />
      </main>
    </div>
  </div>
</template>
