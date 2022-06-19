<script lang="ts">
export default {
  name: "TableLancamentos",
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
  <div class="">
    <div class="py-4">
      <div class="flex justify-between">
        <div class="w-full flex gap-8">
          <span class="cursor-pointer">Ativos</span>
          <span class="cursor-pointer">Arquivados</span>
        </div>
          
      </div>
    </div>
  </div>

  <div class="relative rounded-t-md overflow-x-auto">
    <table
      v-if="data.length !== 0"
      class="w-full text-sm text-left text-neutral-500 dark:text-neutral-400"
    >
      <thead
        class="text-md select-none text-neutral-500 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-200"
      >
        <tr>
          <th scope="col" class="px-6 py-3">nome</th>
          <th scope="col" class="px-6 py-3 text-center">ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.key"
          class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 h-10 hover:bg-neutral-50 dark:hover:bg-neutral-700/80"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-neutral-900 dark:text-white whitespace-nowrap"
          >
            {{ item.label }}
          </th>

          <td class="flex justify-center items-center h-12">
            <a
              href="#"
              class="font-medium mt-1.5 text-amber-600 dark:text-neutral-300 hover:underline dark:hover:bg-neutral-600 rounded p-2"
            >
              <Delete width="20" height="20" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
