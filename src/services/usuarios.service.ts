import { ApiService } from "./core/api";

class UserService {
  constructor(private api: ApiService) {}

  get() {}

  create(request:any) {
    return this.api.post("/client/user_accounts/create/", request);
  }

  delete(request:any) {
    return this.api.post("/client/user_accounts/delete/", request);
  }

  update(request:any) {
    return this.api.post("/client/user_accounts/update/", request);
  }
}

export default UserService;
