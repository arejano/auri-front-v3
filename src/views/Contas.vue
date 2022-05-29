<script>
import Title from "@components/Title.vue";
import TableLeads from "@components/TableLeads.vue";
import Pagination from "@components/Pagination.vue";
import Loading from "@components/Loading.vue";
import { ContasService } from "@services/contas.service"
import Input from "@components/Input.vue";
import Button from "@components/Button.vue";
import NavMenu from "@components/NavMenu.vue";

export default {
  components: {
    Title,
    TableLeads,
    Pagination,
    Loading,
    Button,
    Input,
    NavMenu
  },
  data() {
    return {
      loading: false,
      searching: false,
      contas: [],
      contasService: new ContasService(),
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
      await this.contasService.get(request).then((response) => {
        this.contas = response;
        this.loading = false;
      });
    },
    async filterData() {
      this.searching = true;
      await this.contasService.filter(this.search).then((response) => {
        this.contas = response;
        this.searching = false;
      });
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<template class="">
  <NavMenu />
  <Loading v-if="loading" />
  <div v-if="!loading" class="py-2 mt-4">
    <div class="flex justify-between">
      <div class="flex gap-4">
        <Title title="Contas" />
      </div>
      <Button class="w-32" label="Adicionar" :loading="loading" />
    </div>
  </div>

  <TableLeads v-if="!loading" :data="contas" />
  <Pagination v-if="contas.length !== 0" class="mt-4" />
</template>
