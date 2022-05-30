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
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu(event:Boolean) {
      this.showMenu = event;
      this.$refs.sidebar.toggle(this.showMenu);
    },
  },
  computed: {},
};
</script>

<template>
  <div
    class="bg-white h-full text-neutral-900 dark:text-zinc-100 bg-estranho"
  >
    <!-- <NavMenu v-if="type.normal && $route.meta.title !== 'Login'" /> -->
    <NavMenu
      @menuToggle="toggleMenu($event)"
      showMenu="showMenu"
      v-if="$route.meta.title !== 'Login'"
    />
    <div class="flex h-full">
      <div v-if="$route.meta.title !== 'Login'">
        <Sidebar ref="sidebar" show="showMenu" />
      </div>
      <main class="p-10 overflow-auto h-full flex justify-center w-full">
        <div class="w-full" style="max-width: 1366px">
          <router-view></router-view>
          <div class="h-24"></div>
        </div>
      </main>
    </div>
  </div>
</template>
