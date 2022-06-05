import { Store } from "@services/core/store.service";
import { DateUtils } from "../utils/date";

const store: Store = new Store();
const dateUtils: DateUtils = new DateUtils();

export default function auth({ next }) {
  if (
    localStorage.getItem("token") &&
    !dateUtils.expired(store.getExpirationDate())
  ) {
    next();
  } else {
    next("login");
  }
}
