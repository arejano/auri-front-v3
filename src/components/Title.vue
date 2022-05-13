<script lang="ts">
import { ref, toRefs } from "vue";
export default {
  props: {
    title: String,
    subtitle: String,
  },

  setup(props) {
    const { title, subtitle } = toRefs(props);
    return {
      title,
      subtitle,
    };
  },
};
</script>

<template>
  <div class="flex flex-col">
    <span class="tracking-wider text-lg dark:text-white">{{ title }}</span>
    <span class="text-sm dark:text-white">{{ subtitle }}</span>
  </div>
</template>
