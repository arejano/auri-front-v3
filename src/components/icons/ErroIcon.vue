<script>
export default {
  name: "ErroIcon",
  props: {
    width: { type: String, default: "32" },
    height: { type: String, default: "32" },
    fill: { type: String, default: "#888" },
    stroke: { type: String, default: "#888888" },
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
    class="iconify iconify--ic"
    :width="width"
    :height="height"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      :fill="fill"
      d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm1-3h-2v-2h2v2z"
    ></path>
  </svg>
</template>
