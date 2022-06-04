import Login from "@views/unauthenticated/Login.vue";
import ForgotPassword from "@views/unauthenticated/ForgotPassword.vue";
import ResetPassword from "@views/unauthenticated/ResetPassword.vue";

const Unauthenticated = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "ForgotPassword",
    },
  },
  {
    path: "/reset-password:token",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      title: "ResetPassword",
    },
  },
];

export default Unauthenticated;
