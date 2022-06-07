<script lang="ts">
import { ref } from "vue";
import menus from "./menus";
import { useRouter } from "vue-router";

export default {
  props: {
    mini: Boolean,
  },

  setup(props) {
    const hoverMenu = ref(null);
    const selectedMenu = ref(`/${window.location.href.split("/")[3]}`);
    const router = useRouter();

    const hover = (menu) => {
      hoverMenu.value = menu.path;
    };

    const noHover = () => {
      hoverMenu.value = null;
    };

    const to = (menu) => {
      selectedMenu.value = menu.path;
      router.push({ path: menu.path });
    };

    const strokeSelect = (path) => {
      if (selectedMenu.value == path) {
        return "#FFF";
      }
      return;
    };

    return {
      menus,
      props,
      hoverMenu,
      hover,
      noHover,
      to,
      selectedMenu,
      strokeSelect,
    };
  },
};
</script>

<template>
  <div v-for="menu in menus.principal" :key="menu.label">
    <div
      class="flex cursor-pointer"
      @click="to(menu)"
      @mouseover="hover(menu)"
      @mouseleave="noHover()"
    >
      <div
        class="m-3 p-2 rounded"
        :class="{
          'bg-neutral-700/50':
            hoverMenu == menu.path || selectedMenu == menu.path,
        }"
      >
        <component
          :is="menu.icon"
          width="20"
          height="20"
          :fill="strokeSelect(menu.path)"
        />
      </div>
      <div v-if="!mini" class="whitespace-nowrap items-center flex">
        <span
          class="font-semibold tracking-wider text-sm text-neutral-400"
          :class="{
            'text-neutral-100':
              hoverMenu == menu.path || selectedMenu == menu.path,
          }"
        >
          {{ menu.label }}
        </span>
      </div>
    </div>
  </div>

  <div class="h-10"></div>
  <div class="h-8 flex items-center pl-3">
    <span v-if="!mini" class="font-semibold tracking-wider text-sm text-neutral-500"
      >Sistema</span
    >
  </div>
  <div class="" v-for="menu in menus.secundario" :key="menu.label">
    <div
      class="flex cursor-pointer"
      @click="to(menu)"
      @mouseover="hover(menu)"
      @mouseleave="noHover()"
    >
      <div
        class="m-3 p-2 ral-900 rounded"
        :class="{
          'bg-neutral-700/50':
            hoverMenu == menu.path || selectedMenu == menu.path,
        }"
      >
        <component
          :is="menu.icon"
          width="20"
          height="20"
          :fill="strokeSelect(menu.path)"
        />
      </div>
      <div v-if="!mini" class="whitespace-nowrap items-center flex">
        <span
          class="font-semibold tracking-wider text-sm text-neutral-400"
          :class="{
            'text-neutral-100':
              hoverMenu == menu.path || selectedMenu == menu.path,
          }"
        >
          {{ menu.label }}
        </span>
      </div>
    </div>
  </div>
</template>
