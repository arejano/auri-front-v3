<script lang="ts">
import { ref } from "vue";
import SideBarMenus from "./SideBarMenus.vue";

export default {
  components: {
    SideBarMenus,
  },
  setup() {
    const showMenu = ref(true);
    const mini = ref(false);

    const changeMini = () => {
      mini.value = !mini.value;
    };

    return {
      showMenu,
      mini,
      changeMini,
    };
  },
};
</script>

<template>
  <aside
    v-if="showMenu"
    class="dark:bg-neutral-900 flex flex-col transition-all h-full w-64 dark:border-r dark:border-neutral-700/30"
    :class="{ 'w-16': mini }"
  >
    <section class="flex justify-between pl-4 h-24 pt-4 items-center">
      <div class="cursor-pointer transition-all" @click="changeMini">
        <img src="../../assets/logo.png" width="30" height="30" />
      </div>

      <div
        v-if="!mini"
        class="dark:bg-neutral-700/50 mr-2 dark:hover:bg-neutral-600/50 cursor-pointer dark:border-t dark:border-neutral-700 rounded h-6 w-6 flex justify-center dark:text-neutral-300/80 transition-all"
        @click="changeMini"
      >
        <ArrowLeftSolid width="20" />
      </div>

      <div
        v-else
        class="dark:bg-neutral-700/50 dark:hover:bg-neutral-600/50 cursor-pointer dark:border-t dark:border-neutral-700 rounded-l h-6 w-2 flex justify-center dark:text-neutral-300/80 transition-all"
        @click="changeMini"
      ></div>
    </section>
    <section class="h-full">
      <SideBarMenus :mini="mini" />
    </section>

    <section
      class="dark:bg-neutral-800/50 h-12 text-neutral-300 flex justify-between dark:border-t dark:border-neutral-800"
    >
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
        class="flex justify-center items-center p-4 transition-all"
        :class="{ 'w-full': mini }"
      >
        <div
          class="dark:bg-neutral-700/70 rounded-full h-6 w-6 items-center flex justify-center"
        >
          <ChevronUp width="16" />
        </div>
      </div>
    </section>
  </aside>
</template>
