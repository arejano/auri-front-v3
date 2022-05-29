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
    <div
      class="text-sm font-medium w-full text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
      <ul class="flex w-full -mb-px">
        <li v-for="item in menu" :key="item.label" class="mr-2 w-full">
          <router-link
            href="#"
            :to="item.path"
            class="inline-block w-full p-4 rounded-t-lg border-b-2 border-transparent hover:text-amber-600 hover:border-amber-300 dark:hover:text-amber-300"
            :class="[
              {
                ' hover:border-gray-700 inline-block p-4 text-amber-600 rounded-t-lg border-b-2 border-amber-600 active dark:text-amber-500 dark:border-amber-500':
                  $route.meta.title == item.label,
              },
            ]"
            >{{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
