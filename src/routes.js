import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Perfil from "./views/Perfil.vue";
import Lancamentos from "./views/Lancamentos.vue";
import Ajuda from "./views/Ajuda.vue";
import Configuracoes from "./views/Configuracoes.vue";
import ReportarErro from "./views/ReportarErro.vue";
import CriadorUrls from "./views/CriadorUrls.vue";
import Leads from "./views/Leads.vue";
import Conta from "./views/Conta.vue";
import Contas from "./views/Contas.vue";
import Usuarios from "./views/Usuarios.vue";
import Integracoes from "./views/Integracoes.vue";
import Importacoes from "./views/Importacoes.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/dashboard", component: Dashboard, meta: { title: "Dashboard" } },
  {
    path: "/lancamentos",
    component: Lancamentos,
    meta: { title: "Lançamentos" },
  },
  {
    path: "/criador_urls",
    component: CriadorUrls,
    meta: { title: "Criador de URLS" },
  },
  { path: "/leads", component: Leads, meta: { title: "Leads" } },
  { path: "/perfil", component: Perfil, meta: { title: "Perfil" } },
  { path: "/perfil/conta", component: Conta, meta: { title: "Minha Conta" } },
  { path: "/perfil/contas", component: Contas, meta: { title: "Sub Contas" } },
  { path: "/perfil/usuarios", component: Usuarios, meta: { title: "Usuários" } },
  { path: "/perfil/integracoes", component: Integracoes, meta: { title: "Integrações" } },
  { path: "/perfil/importacoes", component: Importacoes, meta: { title: "Importações" } },
  { path: "/ajuda", meta: { title: "Ajuda" }, component: Ajuda },
  {
    path: "/reportar_erro",
    meta: { title: "Reportar erro" },
    component: ReportarErro,
  },
  {
    path: "/configuracoes",
    meta: { title: "Configurações" },
    component: Configuracoes,
  },
  { path: "/:path(.*)", component: NotFound },
];
