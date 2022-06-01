<script>
export default {
  name: "Avatar",
  props: {
    src: { type: String, required: true },
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div class="inline-block object-cover rounded-full"><img class="rounded-full" :src="src" /></div>
</template>
