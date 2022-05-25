<script>
export default {
  props: {
    leads: [],
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="relative overflow-x-auto">
    <div class="py-4">
      <div class="flex justify-between">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-neutral-500 dark:text-neutral-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-80 pl-10 p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
            placeholder="Search for items"
          />
        </div>
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-full border border-neutral-200 hover:bg-neutral-100 hover:text-amber-700 focus:z-10 focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-600 dark:hover:text-amber-400 dark:hover:bg-amber-400/20"
        >
          Exportar compradores
        </button>
      </div>
    </div>
    <table class="w-full text-sm text-left text-neutral-500 dark:text-neutral-400">
      <thead
        class="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400"
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
          <th scope="col" class="px-6 py-3">Lead</th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="lead in leads"
          :key="lead.id"
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
            {{ lead.id }}
          </th>
          <th
            scope="row"
            class="px-6 py-4 font-medium text-neutral-900 dark:text-white whitespace-nowrap"
          >
            {{ lead.email }}
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
