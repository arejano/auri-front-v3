<script lang="ts">
import { ref } from "vue";
import Session from "@services/session.service";
import { Store } from "@services/core/store.service";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      session: new Session(),
    };
  },
  methods: {
    async logout() {
      await this.session.logout().then((response) => {
        if (response.isSuccess) {
          this.$router.push({ path: "/login" });
        }
      });
    },
  },

  setup() {
    const showDropdow = ref(true);
    const showSubContas = ref(false);
    const changeDropDown = () => {
      showDropdow.value = !showDropdow.value;
    };

    const changeSubContas = () => {
      showSubContas.value = !showSubContas.value;
    };

    const router = useRouter();
    const store = new Store();

    const menus = [
      {
        label: "Alterar Conta",
        action: () => {
          changeSubContas();
        },
      },
      {
        label: "Pefil",
        action: () => {
          router.push({ path: "/perfil" });
        },
      },

      {
        label: "Minha conta",
        action: (x) => {
          router.push({ path: "/perfil/conta" });
        },
      },

      {
        label: "Usuários",
        action: () => {
          router.push({ path: "/perfil/usuarios" });
        },
      },

      {
        label: "Auditoria",
        action: (x) => {
          router.push({ path: "/perfil" });
        },
      },

      {
        label: "Sair",
        action: (x) => {
          store.clear();
          router.push({ path: "/login" });
        },
      },
    ];

    return {
      showDropdow,
      changeDropDown,
      changeSubContas,
      menus,
      showSubContas,
    };
  },
};
</script>

<template>
  <button
    id="dropdownDefault"
    @click="changeDropDown"
    class="text-gray-300 focus:ring-0 focus:outline-none font-medium p-1 rounded-full text-sm dark:hover:bg-amber-400/20"
    type="button"
  >
    <ChevronDown width="16" height="16" />
  </button>
  <!-- Dropdown menu -->
  <div
    v-click-outside="changeDropDown"
    v-if="showDropdow"
    class="z-10 absolute right-2 mt-2 bg-white divide-y divide-gray-100 rounded shadow-md w-44 dark:border-t dark:border-neutral-700 dark:bg-neutral-800"
  >
    <div v-if="!showSubContas">
      <ul
        class="py-1 text-sm text-gray-700 dark:text-amber-200"
        aria-labelledby="dropdownDefault"
      >
        <li v-for="menu in menus" :key="menu.label">
          <a
            href="#"
            @click="menu.action"
            class="text-gray-300 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-amber-400/20 dark:hover:text-amber-400"
            >{{ menu.label }}</a
          >
        </li>
      </ul>
    </div>
    <div v-if="showSubContas">
      <div @click="changeSubContas()" class="w-full px-2 py-2 ">
        <ChevronLeft width="20" height="20" />
      </div>
    </div>
  </div>
</template>
