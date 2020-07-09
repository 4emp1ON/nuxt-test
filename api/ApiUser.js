export class ApiUser {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async login(credential) {
    return this.httpClient.post("/login", { ...credential, login: credential.username });
  }
}
