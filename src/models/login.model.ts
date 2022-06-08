export interface LoginModel {
  email: String;
  password: String;
}

export interface LoginResponse {
  token_type: string;
  access_token: string;
}
