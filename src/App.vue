<script lang="ts">
//import Nav from "@components/Navbar/Nav.vue";
import SideBar from "@components/SideBar/SideBar.vue";
import NavMenu from "@components/navmenu/Nav.vue";


export default {
  components: {
    SideBar,
    NavMenu,
  },
  setup() {
     },
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {},
  methods: {
    toggleMenu(event: Boolean) {
      this.showMenu = event;
      this.$refs.sidebar.toggle(this.showMenu);
    },
  },
  computed: {},
};
</script>

<template>
  <div class="bg-white h-full text-neutral-900 dark:text-zinc-100 bg-estranho">
    <!-- <NavMenu v-if="type.normal && $route.meta.title !== 'Login'" /> -->
    <!-- <NavMenu -->
    <!--   @menuToggle="toggleMenu($event)" -->
    <!--   showMenu="showMenu" -->
    <!--   v-if="$route.meta.title !== 'Login'" -->
    <!-- /> -->
    <div class="flex h-full">
      <div v-if="$route.meta.title !== 'Login'">
        <SideBar />
        <!-- <Sidebar ref="sidebar" show="showMenu" /> -->
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
