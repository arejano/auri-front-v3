import { Logger } from "./logger.service";

export class ApiService {
  api_url: string = import.meta.env.VITE_APP_API_URL;
  logger: Logger = new Logger();
  constructor() {
  }

  async get(url: string) {
    this.logger.log("API|Get")
    return await fetch(`${this.api_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getAuthToken(),
        "X-CSRF-TOKEN": "",
      },
    })
      .then(this.handleErrors)
      .then((response) => {
        return response.json();
      });
  }

  async post(url: string, request: any) {
    return await fetch(`${this.api_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getAuthToken(),
        "X-CSRF-TOKEN": "",
      },
      method: "POST",
      // TODO: Rever
      // mode: "no-cors",
      body: JSON.stringify(request),
    })
      .then(this.handleErrors)
      .then((response) => {
        return response.json();
      });
  }

  async delete(url: string, request: any) {
    return await fetch(`${this.api_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getAuthToken(),
        "X-CSRF-TOKEN": "",
      },
      method: "DELETE",
      // TODO: Rever
      // mode: "no-cors",
      body: JSON.stringify(request),
    })
      .then(this.handleErrors)
      .then((response) => {
        return response.json();
      });
  }

  async blob(url: string) {
    return await fetch(`${this.api_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getAuthToken(),
        "X-CSRF-TOKEN": "",
        responseType: "blob",
      },
      method: "GET",
    })
      .then(this.handleErrors)
      .then((response) => {
        return response.blob();
      });
  }

  handleErrors(response: any) {
    if (response.status == 401) {
      localStorage.removeItem("TOKEN");
      // window.location = "/";
    }
    //TODO: Tratar error
    // if (!response.ok) {
    //   return  response
    // }
    return response;
  }

  getAuthToken() {
    const token = localStorage.getItem("TOKEN");
    if (token !== undefined) {
      return `Bearer ${token}`;
    } else {
      throw new Error("Token Invalido");
    }
  }
}
