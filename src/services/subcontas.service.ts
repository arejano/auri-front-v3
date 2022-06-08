import { ApiService } from "./core/api.service";
import StoreService from "./core/store.service";

export class SubAccountsService {
  api: ApiService;
  store: StoreService;
  constructor() {
    this.api = new ApiService();
    this.store = new StoreService();
  }

  async get() {
    const response = await this.api.get(
      "/client/user-accounts/select-user-account"
    );
    return response;
  }

  async getSubAccounts() {
    const response = await this.api.get(
      "/client/user-accounts/select-user-account"
    );
    return response;
  }

  async set(index: string) {
    const response = await this.api.simplePost(
      `/client/user-accounts/switch-user-account/${index}`,
    );
    return response.data;
  }
}
