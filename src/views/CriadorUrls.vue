<script>
import Title from "@components/Title.vue";
import Input from "@components/Input.vue";
import TableUrls from "@components/TableUrls.vue";

export default {
  components: {
    Title,
    Input,
    TableUrls,
  },
  setup() {},
};
</script>

<template class="">
  <Title title="Criador URL" subtitle="Crie aqui sua URL" />

  <form class="mt-6">
    <div>
      <Input label="Url" type="text" placeholder="UTM URL" />
      <Input label="Campaign" type="text" placeholder="UTM Campaign" />
      <Input label="Source" type="text" placeholder="UTM Source" />
    </div>
    <div class="flex gap-4 justify-between">
      <Input label="Medium" type="text" placeholder="UTM Medium" />
      <Input label="Content" type="text" placeholder="UTM Content" />
      <Input label="Term" type="text" placeholder="UTM Term" />
    </div>
    <div class="flex justify-end">
      <button
        type="button"
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-amber-400 dark:hover:bg-amber-400/20"
      >
        Gerar
      </button>
    </div>
  </form>

  <TableUrls class="mb-32 mt-12"/>
</template>
