import { ApiService } from "./core/api.service";

export class LeadsService {
  api: ApiService;

  constructor() {
    this.api = new ApiService();
  }

  async get(request: any) {
    const response = await this.api.get(`/client/leads?page=${request.page}`);
    return response.data;
  }

  async filter(query: string) {
    const response = await this.api.get(`/client/leads?query=${query}`);
    return response.data;
  }

  async new(data: any) {
    const response = await this.api.post("/client/launches", data);
    return response;
  }

  async export() {
    const response = await this.api.blob("/client/leads/report.csv");
    return response;
  }
}
