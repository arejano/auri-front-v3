<script>
import Title from "@components/Title.vue";
import TableLeads from "@components/TableLeads.vue";
import Pagination from "@components/Pagination.vue";
import Loading from "@components/Loading.vue";
import { LeadsService } from "@services/leads.service";

export default {
  components: {
    Title,
    TableLeads,
    Pagination,
    Loading,
  },
  data() {
    return {
      loading: false,
      leads: [],
      leadsService: new LeadsService(),
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
          this.leads = response;
          this.loading = false;
      });
    },
    async filterData() {
      const query = "";
      this.leads = await this.leadsService.filter(query);
    },
    leadsEnabled() {
      return true;
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
  <TableLeads v-if="!loading" :leads="leads" />
  <Pagination v-if="!loading" class="mt-4" />
</template>
