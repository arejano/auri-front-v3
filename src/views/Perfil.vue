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
        >Nome</label
      >
      <input
        type="email"
        id="email"
        class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
        placeholder="Nome"
        required=""
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
      >
        Qual o seu papel em um lançamento?</label
      >
      <input
        type="text"
        placeholder="Papel em lançamento"
        id="password"
        class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
        required=""
      />
    </div>

    <div class="mb-6">
      <label
        for="valor"
        class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
        >Qual o valor invertido em tráfego pago?</label
      >
      <input
        type="text"
        placeholder="Valor em tráfego pago"
        id="password"
        class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
        required=""
      />
    </div>
  </form>
</template>
