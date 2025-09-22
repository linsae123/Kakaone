import axios from "axios";

export class HttpClient {
  constructor(client) {
    this.client = client;
    this.baseURL = "https://kakao-talk.your-endpoint.com";
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async get(path) {
    return axios.get(this.baseURL + path, { headers: this._headers() });
  }

  async post(path, data) {
    return axios.post(this.baseURL + path, data, { headers: this._headers() });
  }

  _headers() {
    return this.token
      ? { Authorization: `Bearer ${this.token}` }
      : {};
  }
}

export async function httpPost(path, data) {
    const baseURL = "https://katalk.kakao.com"; // 나중에 엔드포인트 변경
    return axios.post(baseURL + path, data);
}
