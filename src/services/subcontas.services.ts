import { ApiService } from "./core/api.service";

export class SubAccountsService {
  constructor(private api: ApiService) {}

  async get() {
    const response = await this.api.get(
      "/client/user-accounts/select-user-account"
    );
    return response.data;
  }

  async set(index: number) {
    const response = await this.api.get(
      `client/user-accounts/switch-user-account/${index}`
    );
    return response.data;
  }
}
