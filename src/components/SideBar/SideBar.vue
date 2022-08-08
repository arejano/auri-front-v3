<script lang="ts">
import { ref } from "vue";
import SideBarMenus from "./SideBarMenus.vue";
import UserMenu from "./UserMenu.vue";

export default {
  name: "SideBar",
  components: {
    SideBarMenus,
    UserMenu,
  },
  setup() {
    const showMenu = ref(true);
    const showUserMenu = ref(false);
    const showDropMenu = ref(false);
    const mini = ref(false);

    const changeMini = () => {
      mini.value = !mini.value;
    };

    const closeUserMenu = () => {
      showUserMenu.value = false;
    };

    return {
      showMenu,
      mini,
      changeMini,
      showUserMenu,
      closeUserMenu,
      showDropMenu,
    };
  },
};
</script>

<template>
  <aside
    v-if="showMenu"
    class="dark:bg-neutral-900 select-none flex flex-col transition-all h-full w-64 dark:border-r dark:border-neutral-700/30 "
    :class="{ 'w-16': mini }"
  >
    <section class="flex justify-between pl-4 py-4 min-h-24 items-center ">
      <div class="cursor-pointer transition-all " @click="changeMini">
        <img
          src="../../assets/logo.png"
          class="h-10 w-8"
          width="30"
          height="30"
        />
      </div>

      <div
        v-if="!mini"
        class="dark:bg-neutral-700/50 mr-2 dark:hover:bg-neutral-600/50 
        cursor-pointer dark:border-t dark:border-neutral-700
        rounded w-8 h-8 flex justify-center dark:text-neutral-300/80 transition-all"
        @click="changeMini"
      >
        <ChevronLeft heigh="15" width="15" />
      </div>

      <div
        v-else
        class=" dark:bg-neutral-700/50 dark:hover:bg-neutral-600/50 cursor-pointer dark:border-t dark:border-neutral-700 rounded-l h-6 w-2 flex justify-center dark:text-neutral-300/80 transition-all"
        @click="changeMini"
      ></div>
    </section>
    <section class="h-full overflow-x-hidden">
      <SideBarMenus :mini="mini" />
    </section>

    <div
      v-if="showDropMenu"
      class="z-10 rounded border-t border-neutral-700 absolute shadow bg-neutral-800 bottom-12 left-6 "
    >
      <UserMenu :mini="!mini" />
    </div>

    <section
      v-click-outside="closeUserMenu"
      class="dark:bg-neutral-800/50 text-neutral-300 transition-all flex flex-col justify-between dark:border-t dark:border-neutral-800"
    >
      <div class="flex">
        <div v-if="!mini" class="flex p-2 space-x-2 items-center w-full">
          <!-- <div class="border border-neutral-700 rounded-full p-1 tracking-wider">GA</div> -->
          <div class="flex flex-col">
            <span
              class="text-sm px-2 font-semibold tracking-wider whitespace-nowrap"
              >Marcos Eduardo</span
            >
          </div>
        </div>
        <div
          class="flex justify-center items-center p-4 transition-all h-12"
          :class="{ 'w-full': mini }"
        >
          <div
            v-if="!showUserMenu && !mini"
            @click="showUserMenu = !showUserMenu"
            class="dark:bg-neutral-700/70 rounded-full h-6 w-6 items-center flex justify-center"
          >
            <ChevronUp width="16" />
          </div>

          <div
            @click="showDropMenu = !showDropMenu"
            v-if="mini"
            class="dark:bg-neutral-700/70 rounded-full h-6 w-6 items-center flex justify-center"
          >
            <ChevronUp width="16" />
          </div>
        </div>
      </div>
      <div v-if="showUserMenu" class="transition-all flex flex-col">
        <div class="h-full">
          <UserMenu :mini="mini" />
        </div>
        <div v-if="showUserMenu" class="w-full flex justify-end pr-4 pt-2 pb-3">
          <div
            @click="showUserMenu = false"
            class="dark:bg-neutral-700/70 rounded-full h-6 w-6 items-center w-full flex justify-center"
          >
            <ChevronDown width="16" />
          </div>
        </div>
      </div>
    </section>
  </aside>
</template>
