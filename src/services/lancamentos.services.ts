import { ApiService } from "./core/api.service";

export class LancamentosService {
  constructor(private api: ApiService) {}

  async get() {
    const response = await this.api.get("/client/launches");
    return response;
  }

  async getArquivados() {
    const response = await this.api.get("/client/launches?archived=true");
    return response;
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
