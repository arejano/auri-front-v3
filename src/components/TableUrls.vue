<script>
export default {
  props: {
    data: [],
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="relative overflow-x-auto">
    <table
      class="w-full text-sm text-left text-neutral-500 dark:text-neutral-400"
    >
      <thead
        class="text-xs text-neutral-700 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">URL</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.id"
          class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700/80"
        >
          <th
            scope="row"
            class="p-2 pr-6 flex items-center  font-medium text-neutral-900 dark:text-white whitespace-nowrap"
          >
            <input class="dark:bg-transparent px-4 border-0 w-full select-none" type="text" disabled v-model="item.full_url" />
            <a class="px-4" href="#">Excluir</a>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
