import Home from "@views/Home.vue";
import Dashboard from "@views/Dashboard.vue";
import Perfil from "@views/Perfil.vue";
import Lancamentos from "@views/Lancamentos.vue";
import Ajuda from "@views/Ajuda.vue";
import Configuracoes from "@views/Configuracoes.vue";
import ReportarErro from "@views/ReportarErro.vue";
import CriadorUrls from "@views/CriadorUrls.vue";
import Leads from "@views/Leads.vue";
import Conta from "@views/Conta.vue";
import Contas from "@views/Contas.vue";
import Usuarios from "@views/Usuarios.vue";
import Integracoes from "@views/Integracoes.vue";
import Importacoes from "@views/Importacoes.vue";
import NotFound from "@views/NotFound.vue";
import JornadaDoLead from "@views/JornadaDoLead.vue";
import Login from "@views/Login.vue";
import Auth from "@middlewares/auth";

const Authenticated = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { title: "Dashboard", middleware: Auth },
  },
  {
    path: "/lancamentos",
    component: Lancamentos,
    meta: { title: "Lançamentos", middleware: Auth },
  },
  {
    path: "/criador_urls",
    component: CriadorUrls,
    meta: { title: "Criador de URLS", middleware: Auth },
  },
  {
    path: "/leads",
    component: Leads,
    meta: { title: "Leads", middleware: Auth },
  },
  {
    path: "/leads/jornada/:lead_id",
    component: JornadaDoLead,
    meta: { title: "Jornada do lead", middleware: Auth },
  },
  {
    path: "/perfil",
    component: Perfil,
    meta: { title: "Perfil", middleware: Auth },
  },
  {
    path: "/perfil/conta",
    component: Conta,
    meta: { title: "Minha Conta", middleware: Auth },
  },
  {
    path: "/perfil/contas",
    component: Contas,
    meta: { title: "Sub Contas", middleware: Auth },
  },
  {
    path: "/perfil/usuarios",
    component: Usuarios,
    meta: { title: "Usuários", middleware: Auth },
  },
  {
    path: "/perfil/integracoes",
    component: Integracoes,
    meta: { title: "Integrações", middleware: Auth },
  },
  {
    path: "/perfil/importacoes",
    component: Importacoes,
    meta: { title: "Importações", middleware: Auth },
  },
  {
    path: "/ajuda",
    meta: { title: "Ajuda", middleware: Auth },
    component: Ajuda,
  },
  {
    path: "/reportar_erro",
    meta: { title: "Reportar erro", middleware: Auth },
    component: ReportarErro,
  },
  {
    path: "/configuracoes",
    meta: { title: "Configurações", middleware: Auth },
    component: Configuracoes,
  },
  { path: "/:path(.*)", component: NotFound },
];

export default Authenticated;
