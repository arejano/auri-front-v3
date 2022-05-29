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
  props: {
    label: String,
    disabled: {
      type: Boolean,
    },
    placeholder: String,
    type: String,
    value: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: undefined,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      focus: false,
      localId: randomId(),
    };
  },
  methods: {
    onChange(event: any) {
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<template>
  <div class="mb-6 w-full relative">
    <div class="flex gap-2">
      <label
        v-if="label"
        class="block mb-2 text-sm tracking-wide font-medium text-neutral-900 dark:text-neutral-300"
        >{{ label }}</label
      >
      <span v-if="required" class="text-red-600">*</span>
    </div>
    <input
      @focus="focus = !focus"
      @focusout="focus = !focus"
      @input="onChange"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :disabled="disabled"
      :autofocus="autofocus"
      class="h-11 bg-neutral-50 border border-neutral-50 text-neutral-900 text-sm rounded-md block w-full p-2.5 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-800 dark:border-neutral-800 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
      :class="{ 'dark:ring-2 dark:ring-red-600': !isValid }"
    />
  </div>
</template>
