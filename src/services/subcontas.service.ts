import { ApiService } from "./core/api.service";

export class SubAccountsService {
  api: ApiService;
  constructor() {
    this.api = new ApiService();
  }

  async get() {
    const response = await this.api.get(
      "/client/user-accounts/select-user-account"
    );
    return response.data;
  }

  async getSubAccounts() {
    const response = await this.api.get(
      "/client/user-accounts/select-user-account"
    );
    console.log(response)
    return response;
  }

  async set(index: number) {
    const response = await this.api.get(
      `client/user-accounts/switch-user-account/${index}`
    );
    return response.data;
  }
}
