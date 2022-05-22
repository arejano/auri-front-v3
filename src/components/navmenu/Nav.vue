<template>

  <div
    class="bg-white dark:bg-neutral-500/10 flex-none border-b p-2 border-neutral-300 dark:border-neutral-700/50 flex items-center justify-between"
  >
    <router-link to="/" class="pl-2">
      <img src="../../assets/auri-texto.png" width="120" />
    </router-link>
    <div>
    <UserMenu />
    </div>
  </div>
</template>

<script lang="ts">
import UserMenu from "@components/UserMenu.vue";

export default {
    components:{
        UserMenu
      }
  }
</script>
