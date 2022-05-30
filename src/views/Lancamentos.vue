<script lang="ts">
import { SubAccountsService } from "@services/subcontas.service";
import TableLancamentos from "@components/TableLancamentos.vue";

export default {
  components: {
    TableLancamentos,
  },
  data() {
    return {
      loading: false,
      searching: false,
      contas: [],
      contasService: new SubAccountsService(),
      search: "",
      pagination: {
        current_page: 1,
        total: 0,
      },
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      const request = {
        page: this.pagination.current_page,
      };
      await this.contasService.getSubAccounts(request).then((response) => {
        this.contas = response;
        this.loading = false;
      });
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<template>
  <Title
    title="Lançamentos"
    subtitle="Acompanhe cada lançamento de forma individual e compare."
  />

  <TableLancamentos :data="contas" class="mt-8" />
</template>
