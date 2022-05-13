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
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Idenfiticador da Conta (ID)</label
      >
      <input
        type="text"
        id="idconta"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=""
        required=""
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Tipo de conta</label
      >
      <input
        type="text"
        placeholder="Tipo de conta"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
      />
    </div>

    <div class="mb-6">
      <label
        for="valor"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Nome da conta</label
      >
      <input
        type="text"
        placeholder="Nome da conta"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required=""
      />
    </div>
  </form>
</template>
