<script lang="ts">
import NavMenu from "@components/NavMenu.vue";
import PerfilService from "@services/perfil.service.ts";
import { User } from "@/models/User";

export default {
  components: {
    NavMenu,
  },
  data() {
    return {
      showModal: false,
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
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<template>
  <NavMenu />
  <Title class="mb-4" title="Perfil" />
  <Skeleton v-if="loading" />
  <Section v-if="!loading">
    <div>
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
    </div>
  </Section>
</template>
