export class ApiService {
  constructor() {
    this.urlBase = process.env.VUE_APP_API_URL;
  }

  async get(url) {
    return await fetch(`${this.urlBase}${url}`, {
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

  async post(url, request) {
    return await fetch(`${this.urlBase}${url}`, {
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

  async delete(url, request) {
    return await fetch(`${this.urlBase}${url}`, {
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

  async blob(url) {
    return await fetch(`${this.urlBase}${url}`, {
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

  handleErrors(response) {
    if (response.status == 401) {
      localStorage.removeItem("TOKEN");
      window.location = "/";
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
