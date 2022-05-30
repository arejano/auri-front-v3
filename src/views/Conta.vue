<script lang="ts">
import { User } from "@/models/User";
import NavMenu from "@components/NavMenu.vue";
import PerfilService from "@services/perfil.service.ts";

export default {
  components: {
    NavMenu,
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
  methods: {},
};
</script>

<template>
  <NavMenu />
  <Title class="mb-4" title="Dados da conta" />
  <Skeleton v-if="loading" />
  <Section v-if="!loading">
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
    <div class="dark:bg-neutral-800 mt-10 flex flex-col rounded-md p-6">
      <Title title="Código de rastreio (TAG)" />
      <code class="dark:bg-neutral-700 p-6 rounded-md">
        &lt;!-- Auri --&gt; <br />
        &lt;script&gt; <br />
        (function(l,d,t,r,c,k){ <br />
        if(!l.lt){l.lt=l.lt||{_c:[]}; <br />
        c=d.getElementsByTagName('head')[0]; <br />
        k=d.createElement('script');k.async=1; <br />
        k.src=t;c.appendChild(k);} <br />
        l.ltq = l.ltq || function(k,v){l.lt._c.push([k,v])}; <br />
        <br />
        <br />
        ltq('init', '3l0-4') <br />
        })(window,document,'//tag.ltrck.com.br/lt12834.js'); <br />
        &lt;script&gt; <br />
        &lt;!-- End Auri --&gt;
      </code>

      <p class="p-2">
        Copie todo o código acima e cole entre as tags &lt;head&gt; do seu site.
      </p>
      <p class="p-2">
        Está com dificuldades para instalar o código de rastreio? Clique aqui
        para acessar nosso tutorial passo a passo de instalação "
      </p>
    </div>
  </Section>
</template>
