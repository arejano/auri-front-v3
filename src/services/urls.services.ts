import { ApiService } from "./core/api";

export class UrlsService {
  constructor(private api: ApiService) {}

  async get() {
    const response = await this.api.get("/client");
    return response;
  }

  async new(data: any) {
    const response = await this.api.post("/client/", data);
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
