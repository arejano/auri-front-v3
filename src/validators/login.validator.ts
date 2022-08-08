import { LoginModel } from "@/models/login.model";
import { ValidatorResponse } from "./validator.model";

export default class LoginValidator {
  async formIsValid(form: LoginModel): Promise<ValidatorResponse> {

    if (!form.email) {
      return {
        success: false,
        error: "Email informado invalido.",
      };
    }

    if (!form.password) {
      return {
        success: false,
        error: "Senha informada deve ser maior que 8.",
      };
    }

    return {
      success: true,
    };
  }

  emailIsValid(password: String): Boolean {
    return password !== "" ? true : false;
  }

  userIsValid(user: String): Boolean {
    return user !== "" ? true : false;
  }
}
