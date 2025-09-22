import { httpPost } from "../network/HttpClient.js";
import { TokenStore } from "./TokenStore.js";

export class AuthClient {
    constructor(client) {
        this.client = client;
        this.tokenStore = new TokenStore();
    }

    async login(email, password) {
        const res = await httpPost("/talk/auth/login", {
        email,
        password,
        device_uuid: this.client.deviceUUID
        });

        if (res.status === 200) {
        this.tokenStore.save(res.data);
        return res.data.access_token;
        }

        throw new Error("Login failed");
    }
}
