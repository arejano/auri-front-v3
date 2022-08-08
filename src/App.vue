<script lang="ts">
//import Nav from "@components/Navbar/Nav.vue";
import SideBar from "@components/SideBar/SideBar.vue";



export default {
  components: {
    SideBar,
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
    sidebarAllowed(title){
      if(title !== undefined){
        const blockRoutes = ['Login','ForgotPassword','ResetPassword']
        return !blockRoutes.includes(title);
      }
      return false;
    }
  },
  computed: {},
};
</script>

<template>
  <!-- <Notifications /> -->
  <div class="bg-white h-full text-neutral-900 dark:text-zinc-100 bg-estranho">
    <div class="flex h-full">
      <div v-if="sidebarAllowed($route.meta.title)"> 
        <SideBar />
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
