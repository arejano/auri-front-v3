<script lang="ts">
import NavMenu from "@components/NavMenu.vue";

export default {
  components: {
    NavMenu,
  },
};
</script>

<template>
  <NavMenu />
  <form>
    <div class="mb-6">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
        >
        Idenfiticador da Conta (ID)</label
      >
      <input
        type="text"
        id="idconta"
        class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
        placeholder="Identificador da Conta"
        required=""
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
      >
        Tipo de conta</label
      >
      <input
        type="text"
        placeholder="Tipo de conta"
        id="password"
        class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
        required=""
      />
    </div>

    <div class="mb-6">
      <label
        for="valor"
        class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
        >Nome da conta</label
      >
      <input
        type="text"
        placeholder="Nome da conta"
        id="password"
        class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
        required=""
      />
    </div>
  </form>
</template>
