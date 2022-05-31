<script>
export default {
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
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-neutral-600 bg-neutral-100 border-neutral-300 rounded focus:ring-neutral-500 dark:focus:ring-neutral-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">leads</th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.id"
          class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700/80"
        >
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-neutral-600 bg-neutral-100 border-neutral-300 rounded focus:ring-neutral-500 dark:focus:ring-neutral-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600"
              />
              <label for="checkbox-table-search-1" class="sr-only"></label>
            </div>
          </td>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-neutral-900 dark:text-white whitespace-nowrap"
          >
            {{ item.id }}
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
              class="font-medium text-amber-600 dark:text-neutral-300  dark:hover:bg-neutral-600 rounded p-2"
              ><Edit width="20" height="20" /></a
            >

            <a
              href="#"
              class="font-medium text-amber-600 dark:text-neutral-300  dark:hover:bg-neutral-600 rounded p-2"
              ><Delete width="20" height="20" /></a
            >
            <a
              href="#"
              class="font-medium text-amber-600 dark:text-neutral-300  dark:hover:bg-neutral-600 rounded p-2"
              >Analise Completa
              
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
