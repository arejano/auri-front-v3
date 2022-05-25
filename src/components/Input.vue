<script lang="ts">
export default {
  props: {
    label: String,
    placeholder: String,
    type: String,
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    onChange(event: any) {
      this.$emit("change", event.target.value);
    },
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
      @input="onChange"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700/60 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
    />
  </div>
</template>
