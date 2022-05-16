import { ApiService } from "./core/api";

class LoginService {
  constructor(private api: ApiService) {}

  async login(request) {
    let ret = undefined;
    if (this.isLogged()) {
      return {
        type: "success",
        isLogged: true,
      };
    }

    if (!this.validarLoginForm(request)) {
      return {
        type: "errror",
        message: "Por favor, preencha todos os campos!",
      };
    } else {
      await this.api.post("/login", request).then((response) => {
        if (response.token_type == "Bearer") {
          ret = {
            type: "success",
            message: "Usuário logado com sucesso!",
            token: response.access_token,
          };
        } else {
          ret = { type: "error", message: response.message };
        }
      });
    }
    return ret;
  }

  async logout() {
    return await this.api.get("/logout").then((response) => response);
  }

  isLogged() {
    return true;
  }

  storeLoginToken(response) {
    // this.$store.dispatch("auth/login", response).then((response) => {
    //   if (response.type === "success") {
    //     this.$router.push({ name: "Home" }).catch();
    //   }
    //   this.$snotify[response.type](response.message);
    // });
  }

  getLoginToken() {
    // this.$store.dispatch("auth/login", this.request).then((response) => {
    //   if (response.type === "success") {
    //     this.$router.push({ name: "Home" }).catch();
    //   }
    //   this.$snotify[response.type](response.message);
    // });
  }

  validarLoginForm(request) {
    if (!request.email || !request.password) {
      return false;
    }
    return true;
  }
}

export default LoginService;
