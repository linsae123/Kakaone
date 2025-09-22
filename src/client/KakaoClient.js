import { AuthClient } from "../auth/AuthClient.js";
import { HttpClient } from "../network/HttpClient.js";
import { WSClient } from "../network/WSClient.js";
import { ChannelList } from "../channel/ChannelList.js";
import { ClientEvents } from "./ClientEvents.js";

export class KakaoClient extends ClientEvents {
    constructor({ deviceName, deviceUUID }) {
        super();
        this.deviceName = deviceName;
        this.deviceUUID = deviceUUID;
        this.authClient = new AuthClient(this);
        this.http = new HttpClient(this);
        this.ws = new WSClient(this);
        this.channels = new ChannelList(this);
    }

    async login(email, password) {
        const token = await this.authClient.login(email, password);
        this.http.setToken(token);
        this.ws.connect(token);
        return token;
    }

    async fetchChannels() {
        return this.channels.fetchAll();
    }

    async sendMessage(channelId, text) {
        return this.channels.get(channelId)?.sendMessage(text);
    }
}
