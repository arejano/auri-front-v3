import PerfilIcon from "@icons/PerfilIcon.vue";
import LogoutIcon from "@icons/LogoutIcon.vue";
import AjudaIcon from "@icons/AjudaIcon.vue";
import SettingIcon from "../icons/SettingIcon.vue";
import UserGroupIcon from "@components/icons/UserGroupIcon.vue";

const menus = {
  alterarConta: {
    label: "Alterar Conta",
    path: "/ajuda",
    icon: UserGroupIcon,
    action: (v) => {
      router.push({path:'/ajuda'})
    },
  },
  perfil: {
    label: "Perfil",
    path: "/reportar_erro",
    icon: PerfilIcon,
    action: (v) => {
    },
  },
  minhaConta: {
    label: "Minha Conta",
    path: "/configuracoes",
    icon: PerfilIcon,
    action: (v) => {
    },
  },
  usuarios: {
    label: "Usuários",
    path: "/configuracoes",
    icon: SettingIcon,
    action: (v) => {
    },
  },
  auditoria: {
    label: "Auditoria",
    path: "/configuracoes",
    icon: AjudaIcon,
    action: (v) => {
    },
  },
  sair: {
    label: "Sair",
    path: "/configuracoes",
    icon: LogoutIcon,

    action: (v) => {
    },
  },
};

export default menus;
