<script>
import Title from "@components/Title.vue";
import TableLeads from "@components/TableLeads.vue";
import Pagination from "@components/Pagination.vue";
import Loading from "@components/Loading.vue";
import { LeadsService } from "@services/leads.service";
import Input from "@components/Input.vue";
import Button from "@components/Button.vue";

export default {
  components: {
    Title,
    TableLeads,
    Pagination,
    Loading,
    Button,
    Input,
  },
  data() {
    return {
      loading: false,
      searching: false,
      data: [],
      leadsService: new LeadsService(),
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
      await this.leadsService.get(request).then((response) => {
        this.data = response;
        this.loading = false;
      });
    },
    async filterData() {
      this.searching = true;
      await this.leadsService.filter(this.search).then((response) => {
        this.data = response;
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
  <Title title="Leads" subtitle="Acompanhe cada lead de forma individual" />
  <Loading v-if="loading" />
  <div v-if="!loading" class="py-2 mt-4">
    <div class="flex justify-between">
      <div class="flex gap-4">
        <Input
          class="w-64"
          :value="search"
          type="text"
          placeholder="Search e-email"
          @input="search = $event.target.value"
          @keydown.enter="filterData()"
        />
        <Button
          @click.native="filterData()"
          class="w-24"
          label="Search"
          :loading="searching"
        />
      </div>
      <Button class="w-32" label="Exportar" :loading="loading" />
    </div>
  </div>

  <TableLeads v-if="!loading" :data="data" />
  <Pagination v-if="data.length !== 0" class="mt-4" />
</template>
