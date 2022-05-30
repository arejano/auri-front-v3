<template>
  <div
    class="bg-white dark:bg-neutral-800 flex-none border-b p-2 border-neutral-300 dark:border-neutral-700/50 flex items-center justify-between"
  >
    <button @click="toggle()">
      <MenuToggle width="20" height="20" />
    </button>
    <div>
      <UserMenu />
    </div>
  </div>
</template>

<script lang="ts">
import UserMenu from "@components/UserMenu.vue";

export default {
  components: {
    UserMenu,
  },
  props: {
    showMenu: {
      type: Boolean,
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    this.localShowMenu = this.showMenu;
  },
  methods: {
    toggle() {
      this.localShowMenu = !this.localShowMenu;
      this.$emit("menuToggle", this.localShowMenu);
    },
  },
};
</script>
