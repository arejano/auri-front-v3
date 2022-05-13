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
    class="text-zinc-100"
    :class="[type.normal ? 'flex' : '', type.topbar ? 'flex flex-col' : '']"
  >
    <div class="h-12 bg-white w-full" v-if="type.topbar">topbar</div>
    <Sidebar v-if="type.normal" />
    <main class="w-full p-10">
      <router-view />
    </main>
  </div>
</template>
