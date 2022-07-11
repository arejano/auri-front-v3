import { ApiService } from "./core/api.service";

export class LeadsService {
  api: ApiService;

  constructor() {
    this.api = new ApiService();
  }

  async get(request: any) {
    const response = await this.api.get(`/client/leads?page=${request.page}`);
    return response;
  }

  async filter(query: string) {
    const response = await this.api.get(`/client/leads?query=${query}`);
    return response.data;
  }

  async new(data: any) {
    const response = await this.api.post("/client/launches", data);
    return response;
  }

  async getLead(lead_id: number) {
    const response = await this.api.get(`/client/leads/journey/${lead_id}`);
    return response;
  }

  async export() {
    const response = await this.api.blob("/client/leads/report.csv");
    return response;
  }

  async report() {
    const response = await this.api.get(`/client/leads/lead-capture-report`);
    return response;
  }
}
