<script lang="ts">
import PerfilIcon from "../icons/PerfilIcon.vue";
import LogoutIcon from "../icons/LogoutIcon.vue";
import AjudaIcon from "../icons/AjudaIcon.vue";
import SettingIcon from "../icons/SettingIcon.vue";
import UserGroupIcon from "../icons/UserGroupIcon.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { SubAccountsService } from "@/services/subcontas.service";
import LoginService from "@/services/session.service";
import StoreService  from "@/services/core/store.service";
import UserService from "@/services/user.service";

export default {
  props: {
    mini: Boolean,
  },
  setup() {
    const router = useRouter();
    const showMenuAccounts = ref(false);
    const session = new LoginService();
    const store = new StoreService();
    const subAccounts = store.getSubAccounts();
    const subAccountsService = new SubAccountsService();
    const userService = new UserService();

    const logout = async () => {
      session.logout();
      router.push({ path: "/login" });
    };

    const selectAccount = async (accountId: string) => {
      subAccountsService.set(accountId).then(() => {
        userService.myAccount().then((result) => {
        router.push({path:'/'})
        });
      });
    };

    const changeMenuAccounts = () => {
      showMenuAccounts.value = !showMenuAccounts.value;
    };

    const menus = {
      alterarConta: {
        label: "Alterar Conta",
        path: "/ajuda",
        icon: UserGroupIcon,
        action: () => {
          changeMenuAccounts();
        },
      },
      perfil: {
        label: "Perfil",
        path: "/reportar_erro",
        icon: PerfilIcon,
        action: (v) => {
          console.log(v);
        },
      },
      minhaConta: {
        label: "Minha Conta",
        path: "/configuracoes",
        icon: PerfilIcon,
        action: (v) => {
          console.log(v);
        },
      },
      usuarios: {
        label: "Usuários",
        path: "/configuracoes",
        icon: SettingIcon,
        action: (v) => {
          console.log(v);
        },
      },
      auditoria: {
        label: "Auditoria",
        path: "/configuracoes",
        icon: AjudaIcon,
        action: (v) => {
          console.log(v);
        },
      },
      sair: {
        label: "Sair",
        path: "/configuracoes",
        icon: LogoutIcon,
        action: (v) => {
          logout();
        },
      },
    };
    return {
      menus,
      showMenuAccounts,
      changeMenuAccounts,
      subAccounts,
      selectAccount,
    };
  },
};
</script>

<template>
  <div v-if="showMenuAccounts">
    <div
      @click="showMenuAccounts = !showMenuAccounts"
      class="p-2 flex items-center dark:hover:bg-neutral-700 cursor-pointer"
    >
      <ChevronLeft width="16" />
    </div>
    <div
      :key="account.key"
      v-for="account in subAccounts"
      @click="selectAccount(account.key)"
      class="flex cursor-pointer justify-between bg-transparent hover:rounded hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-white select-none"
    >
      <span class="font-semibold text-xs tracking-wider p-4">
        {{ account.label }}
      </span>
    </div>
  </div>

  <div v-for="menu in menus" :key="menu.label">
    <div
      v-if="!showMenuAccounts"
      class="flex cursor-pointer justify-between bg-transparent hover:rounded hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-white select-none"
      @click="menu.action(menu.path)"
    >
      <div v-if="!mini" class="whitespace-nowrap items-center flex">
        <span class="font-semibold text-xs tracking-wider px-4">
          {{ menu.label }}
        </span>
      </div>
      <div class="m-1 p-2 px-4 rounded">
        <component :is="menu.icon" width="16" height="16" />
      </div>
    </div>
  </div>
</template>
