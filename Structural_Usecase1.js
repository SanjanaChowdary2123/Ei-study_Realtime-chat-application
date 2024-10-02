class ThirdPartyService {
    sendMessage(msg) {
        console.log(`Third-party service sending message: ${msg}`);
    }
}

class MessagingServiceAdapter {
    constructor(service) {
        this.service = service;
    }

    send(msg) {
        this.service.sendMessage(msg);
    }
}

// Usage
const thirdPartyService = new ThirdPartyService();
const adapter = new MessagingServiceAdapter(thirdPartyService);
adapter.send("Hello from the adapter!");
