<script>
export default {
  name: "Delete",
  props: {
    width: { type: String, default: "32" },
    height: { type: String, default: "32" },
    fill: { type: String, default: "none" },
    stroke: { type: String, default: "currentColor" },
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
    :width="width"
    :height="height"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      :fill="fill"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"
    ></path>
  </svg>
</template>
