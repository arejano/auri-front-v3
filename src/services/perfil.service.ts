import UserService from "@services/user.service.ts"

class PerfilService {
  userService: UserService

  constructor() {
    this.userService = new UserService();
  }

  async get() {
    const profile = await this.userService.getProfile()
    return profile;
  }
}

export default new PerfilService();
