<script>
import DateRangePicker from "@components/DateRangePicker.vue";

export default {
  components: { DateRangePicker },
  name: "NovoLancamento",
  props: {
    src: { type: String, required: true },
  },
  data() {
    return {
      nome: "",
      email: "",
    };
  },
};
</script>
<template>
  <div>
    <Title
      title="Novo Lançamento"
      subtitle="Insira um nome e defina a utm_campaign associada."
    />
    <div class="gap-6 mt-6 self-start flex flex-col">
      <div class="table-column gap-8 break-before-column">
        <Input
          label="Nome"
          :value="nome"
          type="text"
          placeholder="Nome"
          @input="nome = $event.target.value"
        />
      </div>
      <div class="flex gap-6">
        <Input
          label="umt_campaign"
          :value="nome"
          type="text"
          placeholder="Insira o valor da utm_campaign utilizada no lançamento"
          @input="nome = $event.target.value"
        />

        <div class="flex items-center gap-4 pt-1">
          <div
            class="flex items-center border h-11 p-1 rounded px-4 border-neutral-700"
          >
            <input
              id="classico"
              type="radio"
              value=""
              name="inline-radio-group"
              class="w-4 h-4 text-neutral-600 bg-gray-100 border-gray-300 focus:ring-neutral-500 dark:focus:ring-neutral-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="classico"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
              >Clássico / Outros</label
            >
          </div>
          <div
            class="flex items-center border h-11 p-1 rounded px-4 border-neutral-700"
          >
            <input
              id="perpetuo"
              type="radio"
              value=""
              name="inline-radio-group"
              class="w-4 h-4 text-neutral-600 bg-gray-100 border-gray-300 focus:ring-neutral-500 dark:focus:ring-neutral-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="perpetuo"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
              >Perpétuo</label
            >
          </div>
        </div>
      </div>

      <div class="flex gap-4 mb-6">
        <DateRangePicker label="Período de captação dos leads" />
        <DateRangePicker label="Período de carrinho aberto" />
      </div>
    </div>
    <div>
      <div class="flex">
        <Button class="w-64" label="Criar Lançamento" />
      </div>
    </div>
  </div>
</template>
