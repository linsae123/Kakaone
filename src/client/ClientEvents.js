export class ClientEvents {
    constructor() {
        this._listeners = {};
    }

    on(event, handler) {
        if (!this._listeners[event]) this._listeners[event] = [];
        this._listeners[event].push(handler);
    }

    emit(event, ...args) {
        if (this._listeners[event]) {
        this._listeners[event].forEach(fn => fn(...args));
        }
    }
}
