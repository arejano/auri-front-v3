<script lang="ts">
import Title from "@components/Title.vue";
import TableLeads from "@components/TableLeads.vue";
import Pagination from "@components/Pagination.vue";

export default {
  components: {
    Title,
    TableLeads,
    Pagination,
  },
  setup() {},
};
</script>

<template class="">
  <Title title="Leads" subtitle="Acompanhe cada lead de forma individual" />
  <TableLeads />
  <Pagination class="mt-4" />
</template>
