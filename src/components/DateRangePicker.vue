<script lang="ts">
export default {
  name: "DateRangePicker",
  props: {
    label: String,
  },
  data() {
    return {
    };
  },
};
</script>

<template>
  <div class="flex flex-col w-full">
    <label
      class="block mb-2 text-sm tracking-wide font-medium text-neutral-900 dark:text-neutral-300"
      >{{ label }}</label
    >
    <div date-rangepicker class="flex w-full items-center">
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center w-full pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-neutral-500 dark:text-neutral-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          name="start"
          type="text"
          class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-neutral-800 dark:bg-neutral-800 dark:border-0 dark:border-t dark:border-neutral-700/70 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Data inicial"
        />
      </div>
      <span class="mx-4 text-neutral-500">até</span>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-neutral-500 dark:text-neutral-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          name="end"
          type="text"
          class="bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-neutral-800 dark:border-0 dark:border-t dark:border-neutral-700/70 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Data final"
        />
      </div>
    </div>
  </div>
</template>
