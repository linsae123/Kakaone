export class Channel {
    constructor(client, data) {
        this.client = client;
        this.id = data.id;
        this.name = data.name;
    }

    async sendMessage(text) {
        return this.client.http.post(`/talk/channels/${this.id}/messages`, { text });
    }
}
