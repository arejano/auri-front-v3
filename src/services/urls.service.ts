import { ApiService } from "./core/api.service";

export class UrlsService {
  api: ApiService;

  constructor() {
    this.api = new ApiService();
  }

  async get(request:any) {
    const response = await this.api.get(`/client/urls?page=${request.page}`);
    return response;
  }

  async create(data: any) {
    const response = await this.api.simplePost(
      `/client/urls?url=${data.url}&utm_campaign=${data.campaign}&utm_source=${data.source}&utm_medium=${data.medium}&utm_content=${data.content}&utm_term=${data.term}`
    );
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
