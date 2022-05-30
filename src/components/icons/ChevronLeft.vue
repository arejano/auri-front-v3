<script>
export default {
  name: "ChevronLeft",
  props: {
    width: { type: String, default: "32" },
    height: { type: String, default: "32" },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--heroicons-outline"
    width="width"
    height="height"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="fill"
      stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m15 19l-7-7l7-7"
    ></path>
  </svg>
</template>