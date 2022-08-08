<script lang="ts">
export default {
  name: "Card",
  props: {
    title: String,
  },
};
</script>

<template>
  <section class="dark:bg-neutral-800 rounded-md mt-5 shadow">
    <div class="bg-neutral-700 rounded-t-md p-3 font-bold">
      {{ title }}
    </div>
    <slot>
    </slot>
  </section>
</template>
