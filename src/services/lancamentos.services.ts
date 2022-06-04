import { ApiService } from "./core/api.service";

export class LancamentosService {
  constructor(private api: ApiService) {}

  async get() {
    const response = await this.api.get("/client/launches");
    return response;
  }

  async post(data: any) {
    const response = await this.api.post(`/client/launches`, data);
    return response;
  }

  async getLancamento() {
    const response = await this.api.get("/client/launches");
    return response;
  }

  async update() {
    const response = await this.api.get("/client/launches");
    return response;
  }

  async delete(id: number) {
    await this.api.delete(`/cliet/launches/${id}`).then((response) => {
      return response;
    });
  }

  async restore(id: number) {
    await this.api.put(`/cliet/restore-launches/${id}`).then((response) => {
      return response;
    });
  }

  async new(data: any) {
    const response = await this.api.post("/client/launches", data);
    return response;
  }

  async export() {
    const response = await this.api.blob("/client/url-to-csv");
    const file = window.URL.createObjectURL(response);
    const a = document.createElement("a");
    a.href = file;
    a.download = "list_urls.xlsx";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}
