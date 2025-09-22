import { Channel } from "./Channel.js";

export class ChannelList {
    constructor(client) {
        this.client = client;
        this.channels = new Map();
    }

    async fetchAll() {
        const res = await this.client.http.get("/talk/channels");
        res.data.forEach(ch => this.channels.set(ch.id, new Channel(this.client, ch)));
        return Array.from(this.channels.values());
    }

    get(id) {
        return this.channels.get(id);
    }
}
