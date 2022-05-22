<script lang="ts">
import { toRefs } from "vue";
export default {
  props: {
    label: String,
    placeholder: String,
    type: String,
  },

  setup(props) {
    const { label, placeholder, type } = toRefs(props);
    return {
      label,
      placeholder,
      type,
    };
  },
};
</script>

<template>
  <div class="mb-6 w-full">
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >{{ label }}</label
    >
    <input
      :type="type"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700/60 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
      :placeholder="placeholder"
      required=""
    />
  </div>
</template>
