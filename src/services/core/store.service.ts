import { User } from "@/models/User";
import { DateUtils } from "@/utils/date";

export class Store {
  dateUtils: DateUtils;

  constructor() {
    this.dateUtils = new DateUtils();
  }
  saveToken(token: string) {
    localStorage.setItem("token", JSON.stringify(token));
    this.saveExpirationDate();
  }

  saveUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    this.saveExpirationDate();
  }

  saveExpirationDate() {
    localStorage.delete("expiration");
    localStorage.setItem(
      "expiration",
      JSON.stringify({ dataLogin: new Date() })
    );
  }

  getExpirationDate() {
    return JSON.parse(localStorage.getItem("expiration")).dataLogin;
  }

  getUser() {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  }

  getToken() {
    const token = JSON.parse(localStorage.getItem("token"));
    return token.split("|")[1];
  }

  clear() {
    localStorage.clear();
  }
}
