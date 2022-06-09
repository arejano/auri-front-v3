import { User } from "@/models/User";
import { LoginModel, LoginResponse } from "@/models/login.model";
import UserService from "@/services/user.service";
import AuthenticationService from "@/services/authentication.service";
import LoginValidator from "@/validators/login.validator";
import StoreService from "@/services/core/store.service";
import { ValidatorResponse } from "@/validators/validator.model";
import { SubAccountsService } from "@/services/subcontas.service";

interface LoginReturn {
  success: Boolean;
  error?: string;
}

export default class UserDomain {
  service: UserService = new UserService();
  authService: AuthenticationService = new AuthenticationService();
  validator: LoginValidator = new LoginValidator();
  store: StoreService = new StoreService();
  subAccountsService: SubAccountsService = new SubAccountsService();

  constructor() {}


  async get(): Promise<User> {
    const response = await this.service.me();
    return response;
  }

  async login(request: LoginModel): Promise<LoginReturn | ValidatorResponse> {
    const formValid = await this.validator.formIsValid(request);
    if (!formValid.success) {
      return formValid;
    }

    const response: LoginResponse = await this.authService.login(request);
    if (response.token_type == "Bearer") {
      this.store.saveToken(response.access_token);

      const subAccounts = await this.subAccountsService.get();
      this.store.saveSubAccounts(subAccounts);
      const user = await this.service.me();
      this.store.saveUser(user)

      return { success: true };
    } else {
      return { success: true, error: "Usuário ou senha invalidos" };
    }
  }

  async create(request: User) {
    const response = await this.service.create(request);
    return response;
  }

  async update(request: User) {
    const response = await this.service.update(request);
    return response;
  }

  async delete(id: Number) {
    const response = await this.service.delete(id);
    return response;
  }
}
