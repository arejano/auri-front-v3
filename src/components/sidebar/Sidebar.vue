<script lang="ts">
import { ref } from "vue";
import Delete from "@components/icons/Delete.vue";
// import Edit from "@components/icons/Edit.vue";
import DashboardIconVue from "../icons/DashboardIcon.vue";
import PerfilIcon from "../icons/PerfilIcon.vue";
import LancamentosIcon from "../icons/LancamentosIcon.vue";
import UrlIcon from "../icons/UrlIcon.vue";
import AjudaIcon from "../icons/AjudaIcon.vue";
import ErroIcon from "../icons/ErroIcon.vue";
import SettingIcon from "../icons/SettingIcon.vue";

export default {
  setup() {
    const menu = ref({
      dashboard: {
        label: "Dashboard",
        path: "/dashboard",
        icon: DashboardIconVue,
      },
      perfil: { label: "Perfil", path: "/perfil", icon: PerfilIcon },
      lancamentos: {
        label: "Lançamentos",
        path: "/lancamentos",
        icon: LancamentosIcon,
      },
      criadaorUrls: {
        label: "Criador de URLS",
        path: "/criador_urls",
        icon: UrlIcon,
      },
      leads: {
        label: "Leads",
        path: "/leads",
        icon: UrlIcon,
      },
    });

    const menuSistemas = ref({
      ajuda: { label: "Ajuda", path: "/ajuda", icon: AjudaIcon },
      reportarErro: {
        label: "Reportar erro",
        path: "/reportar_erro",
        icon: ErroIcon,
      },
      configuracoes: {
        label: "Configurações",
        path: "/configuracoes",
        icon: SettingIcon,
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
    class="select-none h-full transition-all "
    aria-label="Sidebar"
    :class="{ 'w-12': small }"
  >
    <div
      class="
        overflow-y-auto
        border-r border-neutral-200
        dark:border-neutral-700/50
        flex flex-col
        justify-between
        h-full
        py-4
        bg-neutral-50
        dark:bg-neutral-800/40
        shadow-lg
      "
    >
      <div>
        <div class="flex mb-10 justify-center">
          <router-link to="/">
            <img src="../../assets/auri-texto.png" width="130" />
          </router-link>
        </div>
        <ul class="space-y-3 p-4">
          <li v-for="item in menu" :key="item.path">
            <router-link
              :to="item.path"
              class="
                flex
                font-medium
                tracking-wider
                items-center
                transition-all
                py-2
                px-4
                pr-8
                text-base text-neutral-900
                rounded-xl
                dark:text-neutral-400
                hover:bg-neutral-100
                dark:hover:bg-neutral-400/30 dark:hover:shadow
              "
              :class="{
                'dark:text-neutral-50 bg-neutral-400/20 shadow shadow':
                  $route.meta.title == item.label,
              }"
            >
              <component :is="item.icon" width="20" height="20" />
              <span class="mx-6 whitespace-nowrap">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
        <div
          class=" border-t mt-8 mb-8 border-neutral-200 dark:border-neutral-700"
        ></div>
        <ul class="space-y-3 p-2">
          <span class="p-2 font-bold text-black dark:text-zinc-500"
            >Sistema</span
          >
          <li v-for="item in menuSistemas" :key="item.path">
            <router-link
              :to="item.path"
              class="
                flex
                items-center
                transition-all
                p-2
                pr-8
                text-neutral-900
                rounded
                dark:text-white
                hover:bg-neutral-100
                dark:hover:bg-neutral-300/30
              "
              :class="{ 'bg-neutral-400/20 ': $route.meta.title == item.label }"
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
