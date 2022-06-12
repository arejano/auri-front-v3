<script>
import Title from "@components/Title.vue";
import TableContas from "@components/TableContas.vue";
import Pagination from "@components/Pagination.vue";
import { SubAccountsService } from "@services/subcontas.service";
import NavMenu from "@components/NavMenu.vue";

export default {
  components: {
    TableContas,
    Pagination,
    NavMenu,
  },
  data() {
    return {
      loading: false,
      showModal:false,
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
  },
  created: function () {
    this.getData();
  },
};
</script>

<template class="">
  <NavMenu />

  <Modal @showModal="showModal = $event" :show="showModal">
    Criação do usuaŕio
  </Modal>

  <Skeleton v-if="loading" />
  <div v-if="!loading" class="py-2 mt-4">
    <div class="flex justify-between">
      <div class="flex gap-4">
        <Title title="Contas" />
      </div>
      <Button @click="showModal = true" class="w-32" label="Adicionar" :loading="loading" />
    </div>
  </div>

  <TableContas v-if="!loading" :data="contas" />
  <Pagination v-if="contas.length !== 0" class="mt-4" />
</template>
