<script lang="ts">
import { SubAccountsService } from "@services/subcontas.service";
import TableLancamentos from "@components/TableLancamentos.vue";

export default {
  components: {
    TableLancamentos,
  },
  data() {
    return {
      showModal: false,
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
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toLancamento() {
      this.$router.push({ path: "/lancamentos/novo" });
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

  <div class="flex justify-end">
    <Button @click="toLancamento()" label="Novo Lançamento" class="w-64" />
  </div>
  <NavMenu />

  <TableLancamentos :data="contas" class="mt-8" />
</template>
