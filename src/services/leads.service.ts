import { ApiService } from "./core/api";

export class LeadsService {
  constructor(private api: ApiService) {}

  async get() {
    const response = await this.api.get("/client/leads");
    return response.data;
  }

  async filter(query: string) {
    const response = await this.api.get(`/client/leads?quer=${query}`);
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
