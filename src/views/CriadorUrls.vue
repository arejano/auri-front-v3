<script>
import Title from "@components/Title.vue";
import Input from "@components/Input.vue";
import TableUrls from "@components/TableUrls.vue";
import Loading from "@components/Loading.vue";
import Pagination from "@components/Pagination.vue";
import { UrlsService } from "@services/urls.service";

export default {
  components: {
    Title,
    Input,
    TableUrls,
    Loading,
    Pagination
  },
  data() {
    return {
      data: [],
      loading: false,
      saving: false,
      newData: {
        url: "",
        campaign: "",
        source: "",
        medium: "",
        content: "",
        term: "",
      },
      service: new UrlsService(),
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
      await this.service.get(request).then((response) => {
        this.data = response.data;
        this.loading = false;
      });
    },
    async filterData() {
      const query = "";
      this.data = await this.service.filter(query);
    },
    async save() {
      this.saving = true;
      await this.service.create(this.newData).then((result) => {
        if (result !== undefined) {
          this.limpaForm();
          this.saving = false;
        }
      });
    },
    validaForm() {
      return (
        this.newData.url !== "" &&
        this.newData.campaign !== "" &&
        this.newData.source !== "" &&
        this.newData.medium !== "" &&
        this.newData.content !== "" &&
        this.newData.term !== ""
      );
    },
    limpaForm() {
      this.newData = {
        url: "",
        campaign: "",
        source: "",
        medium: "",
        content: "",
        term: "",
      };
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<template class="">
  <Title title="Criador URL" subtitle="Crie aqui sua URL" />
  <form class="mt-6">
    <div>
      <Input
        :value="newData.url"
        label="Url"
        type="text"
        placeholder="UTM URL"
        @input="newData.url = $event.target.value"
      />

      <Input
        :value="newData.campaign"
        label="Campaign"
        type="text"
        placeholder="UTM Campaign"
        @input="newData.campaign = $event.target.value"
      />

      <Input
        :value="newData.source"
        label="Source"
        type="text"
        placeholder="UTM Source"
        @input="newData.source = $event.target.value"
      />
    </div>
    <div class="flex gap-4 justify-between">
      <Input
        :value="newData.medium"
        label="Medium"
        type="text"
        placeholder="UTM Medium"
        @input="newData.medium = $event.target.value"
      />
      <Input
        :value="newData.content"
        label="Content"
        type="text"
        placeholder="UTM Content"
        @input="newData.content = $event.target.value"
      />
      <Input
        :value="newData.term"
        label="Term"
        type="text"
        placeholder="UTM Term"
        @input="newData.term = $event.target.value"
      />
    </div>
    <div class="flex justify-end">
      <button
        :disabled="!validaForm()"
        type="button"
        @click="save"
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-600 dark:hover:text-amber-400 dark:hover:bg-amber-400/20"
        :class="{ 'cursor-not-allowed': !validaForm() }"
      >
        <Loading small v-if="saving" />

        <div v-if="!saving">
          <span>Novo</span>
        </div>
      </button>
    </div>
  </form>

  <Loading v-if="loading" />
  <TableUrls v-if="data.length !== 0" :data="data" class="mt-12" />
  <Pagination v-if="!loading"  class="mt-6 mb-12"  />
</template>
