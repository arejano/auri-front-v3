<script lang="ts">
import { ref } from "vue";
import Delete from "@components/icons/Delete.vue";
import Edit from "@components/icons/Edit.vue";

export default {
  setup() {
    const menu = ref({
      perfil: { label: "Perfil", path: "/perfil", icon: Edit },
      dashboard: { label: "Dashboard", path: "/dashboard", icon: Edit },
      lancamentos: { label: "Lançamentos", path: "/lancamentos", icon: Delete },
      criadaorUrls: {
        label: "Criador de URLS",
        path: "/criador_urls",
        icon: Delete,
      },
      leads: {
        label: "Leads",
        path: "/leads",
        icon: Delete,
      },
    });

    const menuSistemas = ref({
      ajuda: { label: "Ajuda", path: "/ajuda", icon: Delete },
      reportarErro: {
        label: "Reportar erro",
        path: "/reportar_erro",
        icon: Delete,
      },
      configuracoes: {
        label: "Configurações",
        path: "/configuracoes",
        icon: Delete,
      },
    });

    return {
      menu,
      menuSistemas,
    };
  },
  data() {
    return {
      small: false,
    };
  },
  methods: {
    toggle(value: Boolean) {
      this.small = value;
    },
  },
};
</script>

<template>
  <aside
    class="select-none h-full transition-all"
    aria-label="Sidebar"
    :class="{ 'w-12': small }"
  >
    <div
      class="overflow-y-auto border-r border-neutral-200 dark:border-neutral-700/50 flex flex-col justify-between h-full py-4 bg-amber-50 dark:bg-neutral-800 shadow-lg"
    >
      <div>
        <div class="flex mb-10 justify-center">
          <router-link to="/">
            <img src="../../assets/auri-texto.png" width="130" />
          </router-link>
        </div>
        <ul class="space-y-3 p-2">
          <li v-for="item in menu" :key="item.path">
            <router-link
              :to="item.path"
              class="flex items-center transition-all p-2 pr-8 text-base text-amber-900 rounded-md dark:text-white hover:bg-amber-100 dark:hover:bg-amber-300/30"
              :class="{ 'bg-amber-400/20 ': $route.meta.title == item.label }"
            >
              <component :is="item.icon" width="20" height="20" />
              <span class="mx-6 whitespace-nowrap">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
        <div
          class="border-t mt-8 mb-8 border-amber-200 dark:border-neutral-700"
        ></div>
        <ul class="space-y-3 p-2">
          <span class="p-2 font-bold text-black dark:text-zinc-500"
            >Sistema</span
          >
          <li v-for="item in menuSistemas" :key="item.path">
            <router-link
              :to="item.path"
              class="flex items-center transition-all p-2 pr-8 text-amber-900 rounded dark:text-white hover:bg-amber-100 dark:hover:bg-amber-300/30"
              :class="{ 'bg-amber-400/20 ': $route.meta.title == item.label }"
            >
              <component :is="item.icon" width="20" height="20" />
              <span class="mx-6 whitespace-nowrap">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
