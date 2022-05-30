<template>
  <div
    class="bg-white dark:bg-neutral-800 flex-none border-b p-2 border-neutral-300 dark:border-neutral-700/50 flex items-center justify-between"
  >
    <div>
      <MenuToggle width="20" height="20" />
    </div>
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
};
</script>
