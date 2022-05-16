class UrlsService {
  constructor(){
    let api = new ApiSerice();
  }
  get() {}

  async new(data) {
    const cadastra = await this.api.port("",data)
    return cadastra.data
  }

  export() {}

  editar() {}

  excluir() {}
}
