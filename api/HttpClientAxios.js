export class HttpClientAxios {
  constructor(axios) {
    this.axios = axios;
  }

  get(url, params) {
    return this.axios.$get(url, params);
  }

  post(url, params) {
    return this.axios.$post(url, params);
  }

  put(url, params) {
    return this.axios.$put(url, params);
  }
}