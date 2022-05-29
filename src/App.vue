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
    <!-- <NavMenu v-if="type.normal && $route.meta.title !== 'Login'" /> -->
    <NavMenu v-if="$route.meta.title !== 'Login'" />
    <div class="flex h-full">
      <Sidebar v-if="type.normal && $route.meta.title !== 'Login'" />
      <main class="p-10 overflow-auto h-full flex justify-center w-full">
        <div class="w-full" style="max-width: 1366px">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>
