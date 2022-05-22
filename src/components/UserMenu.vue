<script lang="ts">
import { ref, toRefs } from "vue";

export default {
  setup() {
    let showMenu = ref(true);

    return {
      showMenu,
    };
  },
};
</script>

<template>
  <button
    id="dropdownDefault"
    @click="showMenu = !showMenu"
    class="text-gray-300 focus:ring-0 focus:outline-none font-medium rounded-full p-1 text-sm dark:bg-neutral-600 dark:hover:bg-amber-400/20"
    type="button"
  >
    <svg
      class="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div
    v-if="showMenu"
    class="z-10 absolute right-2 mt-2  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-neutral-700"
  >
    <ul
      class="py-1 text-sm text-gray-700 dark:text-amber-200"
      aria-labelledby="dropdownDefault"
    >
      <li>
        <a
          href="#"
          class="text-gray-300 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-400/20 dark:hover:text-amber-400"
          >Dashboard</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-gray-300 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-400/20 dark:hover:text-amber-400"
          >Settings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-gray-300 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-400/20 dark:hover:text-amber-400"
          >Earnings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-gray-300 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-400/20 dark:hover:text-amber-400"
          >Sign out</a
        >
      </li>
    </ul>
  </div>
</template>
