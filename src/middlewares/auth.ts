import StoreService from "@/services/core/store.service";
import { DateUtils } from "../utils/date";

const store: StoreService = new StoreService();
const dateUtils: DateUtils = new DateUtils();

export default function auth({ next }) {
  if (dateUtils.expired(store.getExpirationDate())) {
    next("login");
  }

  if (localStorage.getItem("token")) {
    next();
  } else {
    next("login");
  }
}
