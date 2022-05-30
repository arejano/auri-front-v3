<script lang="ts">
import NavMenu from "@components/NavMenu.vue";
import Input from "@components/Input.vue";
import PerfilService from "@services/perfil.service.ts";
import { User } from "@/models/User";
import Skeleton from "@components/Skeleton.vue";

export default {
  components: {
    NavMenu,
    Input,
    Skeleton
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
  <Skeleton v-if="loading" />
  <form v-if="!loading">
    <Input
      disabled
      label="Nome"
      :value="profile.user_name"
      type="text"
      placeholder="Nome"
      @input="nome = $event.target.value"
    />
    <Input
      disabled
      label="Qual o seu papel em um lançamento?"
      :value="profile.plan"
      type="text"
      placeholder="Papel em lançamento"
    />
    <Input
      disabled
      label="Qual o valor investido em tráfego pago?"
      :value="profile.investment_value"
      type="text"
      placeholder="Valor em tráfego pago"
    />
  </form>
</template>
