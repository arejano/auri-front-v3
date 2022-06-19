<script lang="ts">
export default {
  props: {
    show: { type: Boolean },
  },
  data() {
    return {
      showModal: true,
    };
  },
  created() {
    console.log(this.show);
    this.showModal = this.show;
  },
  methods: {
    toggle() {
      this.$emit("showModal", !this.show);
    },
  },
};
</script>

<template>
  <div
    v-if="show"
    class="
      flex
      pt-32
      fixed
      w-full
      left-0
      top-0
      h-full
      justify-center
      z-50
      bg-black/80
    "
  >
    <div
      id="default-modal"
      class="flex overflow-hidden top-12 fixed  z-50 justify-center items-center"
    >
      <div
        class="relative px-4 w-full max-w-2xl h-full md:h-auto"
        v-click-outside="toggle"
      >
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-neutral-700">
          <!-- Modal header -->
          <div
            class="
              flex
              justify-between
              items-start
              p-5
              rounded-t
              border-b
              dark:border-gray-600
            "
          >
           
            
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <slot></slot>
          </div>
          
           
          </div>
        </div>
      </div>
    </div>
  
</template>
