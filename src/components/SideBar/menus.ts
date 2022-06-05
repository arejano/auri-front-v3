import DashboardIconVue from "@icons/DashboardIcon.vue";
import PerfilIcon from "@icons/PerfilIcon.vue";
import LancamentosIcon from "../icons/LancamentosIcon.vue";
import UrlIcon from "@icons/UrlIcon.vue";
import AjudaIcon from "@icons/AjudaIcon.vue";
import ErroIcon from "@icons/ErroIcon.vue";
import SettingIcon from "../icons/SettingIcon.vue";

const menus = {
  principal: {
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
  },

  secundario: {
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
  },
};

export default menus;
