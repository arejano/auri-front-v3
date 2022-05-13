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
  <aside class="select-none h-screen" aria-label="Sidebar">
    <div
      class="overflow-y-auto flex flex-col justify-between h-full py-4 px-3 bg-gray-50 dark:bg-zinc-800/50 shadow-lg"
    >
      <div>
        <!-- logo -->
        <div class="flex justify-center">
          <router-link to="/" class="mt-4 mb-10">
            <img src="../../assets/auri-texto.png" width="120" />
          </router-link>
        </div>

        <ul class="space-y-2">
          <li v-for="item in menu" :key="item.path">
            <router-link
              :to="item.path"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-300/30"
              :class="{ 'bg-yellow-300/30': $route.meta.title == item.label }"
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
        <ul
          class="pt-4 mt-12 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          <span class="p-2 font-bold text-zinc-500">Sistema</span>
          <li v-for="item in menuSistemas" :key="item.path">
            <router-link
              :to="item.path"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-300/30"
              :class="{ 'bg-yellow-300/30': $route.meta.title == item.label }"
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
      <div class="flex items-center justify-between">
        <span class="text-zinc-400 tracking-wider">Admin User</span>
        <button class="rounded-full shadow-lg bg-zinc-400/20 hover:bg-zinc-400/30 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="p-0.5"
            width="24"
            height="24"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </aside>
</template>
