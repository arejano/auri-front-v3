<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const menu = ref({
      perfil: { label: "Perfil", path: "/perfil" },
      minhaConta: { label: "Minha Conta", path: "/perfil/conta" },
      subContas: { label: "Sub Contas", path: "/perfil/contas" },
      usuarios: { label: "Usuários", path: "/perfil/usuarios" },
      integracoes: { label: "Integrações", path: "/perfil/integracoes" },
      importaces: { label: "Importações", path: "/perfil/importacoes" },
    });

    return {
      menu,
    };
  },
};
</script>

<template>
  <div class="flex select-none whitespace-nowrap space-x-6 mb-6">
    <div v-for="item in menu" :key="item.label">
      <router-link
        :to="item.path"
        class="p-1 px-4 rounded"
        :class="[{ ' bg-amber-400/30 hover:bg-amber-100 dark:hover:bg-amber-400/50': $route.meta.title == item.label }]"
        >{{ item.label }}</router-link
      >
    </div>
  </div>
</template>
