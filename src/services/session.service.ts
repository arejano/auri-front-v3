import { User } from "@/models/User";
import { ApiService } from "./core/api.service";
import { Logger } from "./core/logger.service";
import { LoginModel } from "@/models/login.model";
import UserService from "./user.service";
import { DateUtils } from "../utils/date";
import { SubAccountsService } from "./subcontas.service";
import StoreService from "./core/store.service";

export default class LoginService {
  store: StoreService = new StoreService();
  api: ApiService;
  logger: Logger = new Logger();
  userService: UserService;
  dateUtils: DateUtils;
  subAccountsService: SubAccountsService;

  constructor() {
    this.api = new ApiService();
    this.userService = new UserService();
    this.dateUtils = new DateUtils();
    this.subAccountsService = new SubAccountsService();
  }

  async login(request: LoginModel) {
    let ret = undefined;

    if (this.isLogged()) {
      return {
        type: "success",
        isLogged: true,
        isSuccess: true,
      };
    }

    if (!this.validarLoginForm(request)) {
      return {
        type: "errror",
        message: "Por favor, preencha todos os campos!",
      };
    } else {
      await this.api
        .postWithOutLogin("/login", request)
        .then((response) => {
          if (response.token_type == "Bearer") {
            ret = {
              isSuccess: true,
              message: "Usuário logado com sucesso!",
              token: response.access_token,
            };

            //Save user in localStorage
            this.store.saveToken(response.access_token);
          } else {
            ret = { isSuccess: false, message: response.message };
          }
        })
        .then(() => {
          this.subAccountsService.get();
          this.storeUser();
        });
    }
    return ret;
  }

  async storeUser() {
    await this.userService.me().then((response) => {
      this.store.saveUser(response);
    });
  }

  logout() {
    this.store.clear();
    return {
      isSuccess: true,
    };
  }

  isLogged() {
    const user = this.store.getUser();
    if (user == null) {
      return false;
    }
    return true;
  }

  validarLoginForm(request: any) {
    if (!request.email || !request.password) {
      return false;
    }
    return true;
  }

  userIsValid() {
    return this.store.getUser() && this.tokenDateIsValid();
  }

  tokenDateIsValid() {
    if (this.dateUtils.expired(this.store.getExpirationDate())) {
      this.store.clear();
      return;
    }
  }
}
