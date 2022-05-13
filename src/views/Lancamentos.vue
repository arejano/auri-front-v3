<script lang="ts">
import Title from "@components/Title.vue";
import TableLancamentos from "@components/TableLancamentos.vue";

export default {
  components: {
    Title,
    TableLancamentos,
  },
  setup() {},
};
</script>

<template>
  <Title
    title="Lançamentos"
    subtitle="Acompanhe cada lançamento de forma individual e compare."
  />

<TableLancamentos class="mt-8" />

</template>
