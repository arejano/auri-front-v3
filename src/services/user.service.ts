import { User } from "@/models/User";
import { ApiService } from "./core/api.service";
import { Store } from "./core/store.service";

class UserService {
  api: ApiService;
  store: Store;
  constructor() {
    this.api = new ApiService();
    this.store = new Store();
  }

  async getProfile() {
    const userId: User = this.store.getUser()
    const profile = await this.api.get(`/admin/users/${userId.id}`)
    return profile;
  }

  async me() {
    return this.api.get("/me");
  }

  create(request: any) {
    return this.api.post("/client/user_accounts/create/", request);
  }

  delete(request: any) {
    return this.api.post("/client/user_accounts/delete/", request);
  }

  update(request: any) {
    return this.api.post("/client/user_accounts/update/", request);
  }
}

export default UserService;
