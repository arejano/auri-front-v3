<script lang="ts">
export default {
  name: "TableContas",
  components: {},
  props: {
    data: [],
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="relative overflow-x-auto rounded-t rounder-md">
    {{ data }}
    <div v-if="data.length === 0" class="p-10 flex justify-center">
      <span>Nenhum dado para a pesquisa informada.</span>
    </div>
    <table
      v-if="data.length !== 0"
      class="w-full text-sm text-left text-neutral-500 dark:text-neutral-400"
    >
      <thead
        class="text-md select-none text-neutral-500 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-200"
      >
        <tr>
          <th scope="col" class="px-6 py-3">nome</th>
          <th scope="col" class="px-6 py-3">email</th>
          <th scope="col" class="px-6 py-3">administrador</th>
          <th scope="col" class="px-6 py-3">status</th>
          <th scope="col" class="px-6 py-3">ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.jey"
          class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700/80"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-neutral-900 dark:text-white whitespace-nowrap"
          >
            {{ item.label }}
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-neutral-900 dark:text-white whitespace-nowrap"
          >
            {{ item.email }}
          </th>
          <td class="flex justify-between px-4 py-4 text-right">
            <a
              href="#"
              class="font-medium text-amber-600 dark:text-neutral-300 hover:underline"
              >Editar</a
            >

            <a
              href="#"
              class="font-medium text-amber-600 dark:text-neutral-300 hover:underline"
              >Excluir</a
            >
            <a
              href="#"
              class="font-medium text-amber-600 dark:text-neutral-300 hover:underline"
              >Analise Completa
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
