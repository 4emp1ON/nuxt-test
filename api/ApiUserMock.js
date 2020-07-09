import { HttpError } from '~/domain/error';
const sleep = (m) => new Promise((r) => setTimeout(r, m));

export class ApiUserMock {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async login(credential) {
    await sleep(1000);
    const users = await this.httpClient.get("/mock/users.json");
    const user = users.find((user) => user.username === credential.username);
    if (user && user.password == credential.password) return user;
    else throw new HttpError("Неверная пара логин-пароль", 401);
  }
}
