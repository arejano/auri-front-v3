<script>
export default {
  name: "ArrowLeftSolid",
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
    class="iconify iconify--heroicons-solid"
    :width="width"
    :height="heigth"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M9.707 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L7.414 9H15a1 1 0 1 1 0 2H7.414l2.293 2.293a1 1 0 0 1 0 1.414Z"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>
