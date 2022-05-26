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
    const showDropdow = ref(false);
    const changeDropDown = () => {
      showDropdow.value = !showDropdow.value;
    };

    const router = useRouter();
    const store = new Store();

    const menus = [
      {
        label: "Alterar Conta",
        action: () => {
          console.log("Alterando Conta");
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
      menus,
    };
  },
};
</script>

<template>
  <button
    id="dropdownDefault"
    @click="changeDropDown"
    class="text-gray-300 focus:ring-0 focus:outline-none font-medium rounded-full p-1 text-sm dark:bg-neutral-600 dark:hover:bg-amber-400/20"
    type="button"
  >
    <svg
      class="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div
    v-click-outside="changeDropDown"
    v-if="showDropdow"
    class="z-10 absolute right-2 mt-2 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-neutral-700"
  >
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
</template>
