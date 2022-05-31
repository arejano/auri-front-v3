<script>
export default {
  name: "ChevronRight",
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
    height="heigth"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="fill"
      stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m9 5l7 7l-7 7"
    ></path>
  </svg>
</template>
