<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const menu = ref({
      perfil: { label: "Perfil", path: "/perfil" },
      dashboard: { label: "Dashboard", path: "/dashboard" },
      lancamentos: { label: "Lançamentos", path: "/lancamentos" },
      criadaorUrls: { label: "Criador de URLS", path: "/criador_urls" },
      leads: { label: "Leads", path: "/leads" },
    });

    const menuSistemas = ref({
      ajuda: { label: "Ajuda", path: "/ajuda" },
      reportarErro: { label: "Reportar erro", path: "/reportar_erro" },
      configuracoes: { label: "Configurações", path: "/configuracoes" },
    });

    return {
      menu,
      menuSistemas,
    };
  },
};
</script>

<template>
  <aside class="select-none h-full" aria-label="Sidebar">
    <div
      class="overflow-y-auto border-r border-neutral-200 dark:border-neutral-700/50 flex flex-col justify-between h-full py-4  bg-gray-50 dark:bg-neutral-500/10 shadow-lg"
    >
      <div>
        <!-- logo -->
        <ul class="space-y-3 p-2">
          <li v-for="item in menu" :key="item.path">
            <router-link
              :to="item.path"
              class="flex items-center transition-all p-2 pr-8 text-base text-gray-900 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-300/30"
              :class="{ 'bg-neutral-300/20 ': $route.meta.title == item.label }"
            >
              <svg
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="mx-6 whitespace-nowrap">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
        <div class="border-t mt-8 mb-8 border-gray-200 dark:border-neutral-700 "></div>
        <ul
          class="space-y-3 p-2 "
        >
          <span class="p-2 font-bold text-black dark:text-zinc-500">Sistema</span>
          <li v-for="item in menuSistemas" :key="item.path">
            <router-link
              :to="item.path"
              class="flex items-center transition-all p-2 pr-8 text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-300/30"
              :class="{ 'bg-neutral-300/20 ': $route.meta.title == item.label }"
            >
              <svg
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="mx-6 whitespace-nowrap">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
