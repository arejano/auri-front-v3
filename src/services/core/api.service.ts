import { Logger } from "./logger.service";
import { Store } from "@core/store.service";

export class ApiService {
  api_url: string = import.meta.env.VITE_APP_API_URL;
  logger: Logger = new Logger();
  store: Store = new Store();
  constructor() {}

  async get(url: string) {
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

  async getWithOutLogin(url: string) {
    return await fetch(`${this.api_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: undefined,
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

  async simplePost(url: string) {
    return await fetch(`${this.api_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.getAuthToken(),
        "X-CSRF-TOKEN": "",
      },
      method: "POST",
    })
      .then(this.handleErrors)
      .then((response) => {
        return response.json();
      });
  }

  async postWithOutLogin(url: string, request: any) {
    return await fetch(`${this.api_url}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: undefined,
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

  // async delete(url: string, request: any) {
  //   return await fetch(`${this.api_url}${url}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       Authorization: this.getAuthToken(),
  //       "X-CSRF-TOKEN": "",
  //     },
  //     method: "DELETE",
  //     // TODO: Rever
  //     // mode: "no-cors",
  //     body: JSON.stringify(request),
  //   })
  //     .then(this.handleErrors)
  //     .then((response) => {
  //       return response.json();
  //     });
  // }

  async delete(url: string) {
    await fetch(`${this.api_url}${url}`, {
      method: "DELETE",
    }).then((res) => {
      return res;
    });
  }

  async put(url: string) {
    await fetch(`${this.api_url}${url}`, {
      method: "PUT",
    }).then((res) => {
      return res;
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
    const token = this.store.getToken();
    if (token !== undefined) {
      return `Bearer ${token}`;
    } else {
      throw new Error("Token Invalido");
    }
  }
}
