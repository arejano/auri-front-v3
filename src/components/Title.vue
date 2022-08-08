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
    <span class="tracking-wider font-bold text-2xl dark:text-zinc-300">{{ title }}</span>
    <span class="text-sm dark:text-zinc-300 tracking-wide py-2">{{ subtitle }}</span>
  </div>
</template>
