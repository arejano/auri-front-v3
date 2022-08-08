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
  <div class="relative rounded-t rounded-md overflow-x-auto">
    <table
      class="w-full p-2 text-sm text-left text-neutral-500 dark:text-neutral-400"
    >
      <thead
        class="text-md select-none text-neutral-500 uppercase bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-200"
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
            class="p-2 pr-6 flex items-center font-medium text-neutral-900 dark:text-white whitespace-nowrap"
          >
            <input
              class="dark:bg-transparent px-4 border-0 w-full select-none"
              type="text"
              disabled
              v-model="item.full_url"
            />
            <a
              href="#"
              class="font-medium mt-1.5 text-amber-600 dark:text-neutral-300 hover:underline dark:hover:bg-neutral-600 rounded p-2"
            >
              <Delete width="20" height="20" /></a>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
