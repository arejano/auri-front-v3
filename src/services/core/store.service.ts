import { User } from "@/models/User";
import { DateUtils } from "@/utils/date";

interface SubAccounts {
  key: string;
  label: string;
}

export default class StoreService {
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
    localStorage.removeItem("expiration");
    localStorage.setItem(
      "expiration",
      JSON.stringify({ dataLogin: new Date() })
    );
  }

  getExpirationDate(): Date {
    const expirationDate = localStorage.getItem("expiration");
    if (expirationDate) {
      return JSON.parse(expirationDate).dataLogin;
    }
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

  saveSubAccounts(response: SubAccounts[]) {
    localStorage.setItem("subAccounts", JSON.stringify(response));
  }

  getSubAccounts(): String {
    return JSON.parse(localStorage.getItem("subAccounts"));
  }
}