<script>
export default {
  name: "DashboardIcon",
  props: {
    width: { type: String, default: "32" ,},
    height: { type: String, default: "32", },
    fill: { type: String, default: "#888888" },
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
    class="iconify iconify--material-symbols"
    :width="width"
    :height="height"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      :fill="fill"
      :stoke="stroke"
      d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h6V5H5v14Zm8 0h6v-7h-6v7Zm0-9h6V5h-6v5Z"
    ></path>
  </svg>
</template>
