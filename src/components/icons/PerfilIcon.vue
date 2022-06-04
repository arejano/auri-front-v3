<script>
export default {
  name: "PerfilIcon",
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
    class="iconify iconify--ion"
    :width="width"
    :height="height"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="#888888"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96Z"
    ></path>
    <path
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
      d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z"
    ></path>
  </svg>
</template>;
