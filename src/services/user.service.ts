import { User } from "@/models/User";
import { ApiService } from "./core/api.service";
import StoreService  from "@/services/core/store.service";

class UserService {
  api: ApiService;
  store: StoreService;
  constructor() {
    this.api = new ApiService();
    this.store = new StoreService();
  }

  async getProfile() {
    const userId: User = this.store.getUser()
    const profile = await this.api.get(`/admin/users/${userId.id}`)
    return profile;
  }

  async me() {
    return this.api.get("/me");
  }


  async myAccount() {
    return this.api.get("/client/user-accounts/my-account");
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

  recover(request: any) {
    return this.api.post("/forgot-password", request);
  }
}

const cc = {
  login:(v) => {
    console.log(v)
  }
}



export default UserService;
