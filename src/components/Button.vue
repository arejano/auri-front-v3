<script lang="ts">
function randomId() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export default {
  name: "Button",
  props: {
    label: String,
    required: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localId: randomId(),
    };
  },
};
</script>

<template>
  <button
    :disabled="invalid"
    type="button"
    class="h-11 dark:border-0 dark:border-t dark:border-neutral-500/50 py-2.5 w-full px-5 text-sm font-medium text-neutral-900 focus:outline-none bg-neutral-700 rounded-md border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-4 focus:ring-neutral-200 dark:focus:ring-2 dark:focus:ring-neutral-500 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-700 dark:hover:text-white dark:hover:bg-neutral-600"
    :class="{ 'cursor-not-allowed': loading || invalid }"
  >
    <div v-if="loading" class="flex flex-row justify-center">
      <svg
        class="animate-spin h-5 w-5 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        width="32"
        height="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 50 50"
      >
        <path
          fill="currentColor"
          d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4c-6-2.7-13.3-1.6-18.3 2.6c-4.8 4-7 10.5-5.6 16.6c1.3 6 6 10.9 11.9 12.5c7.1 2 13.6-1.4 17.6-7.2c-3.6 4.8-9.1 8-15.2 6.9c-6.1-1.1-11.1-5.7-12.5-11.7c-1.5-6.4 1.5-13.1 7.2-16.4c5.9-3.4 14.2-2.1 18.1 3.7c1 1.4 1.7 3.1 2 4.8c.3 1.4.2 2.9.4 4.3c.2 1.3 1.3 3 2.8 2.1c1.3-.8 1.2-2.5 1.1-3.8c0-.4.1.7 0 0z"
        ></path>
      </svg>
    </div>
    <div v-if="!loading">
      <span>{{ label }}</span>
    </div>
  </button>
</template>
