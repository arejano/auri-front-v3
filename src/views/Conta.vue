<script lang="ts">
import NavMenu from "@components/NavMenu.vue";
import Input from "@components/Input.vue";
import PerfilService from "@services/perfil.service.ts";
import { User } from "@/models/User";
import Loading from "@components/Loading.vue";

export default {
  components: {
    NavMenu,
    Input,
    Loading,
  },
  data() {
    return {
      loading: false,
      perfilService: PerfilService,
      profile: {},
    };
  },
  async created() {
    this.loading = true;
    await this.perfilService.get().then((response: User) => {
      this.profile = response;
      this.loading = false;
    });
  },
  methods: {
    },
};
</script>

<template>
  <NavMenu />
  <Loading v-if="loading" />
  <form v-if="!loading">
    <div class="mb-6">
      <Input
        disabled
        label="Idenfiticador da Conta (ID)"
        :value="profile.id"
        type="text"
        placeholder="Identificador da Conta"
        @input="user = $event.target.value"
      />
      <Input
        disabled
        label="Tipo de conta"
        :value="profile.has_accounts"
        type="text"
        placeholder="Tipo de conta"
        @input="user = $event.target.value"
      />
      <Input
        disabled
        label="Nome da conta"
        :value="profile.user_name"
        type="text"
        placeholder="Nome da conta"
        @input="user = $event.target.value"
      />
    </div>
  </form>
</template>
