class ChatApplication {
    constructor() {
        if (ChatApplication.instance) {
            return ChatApplication.instance;
        }
        this.chatRooms = [];
        ChatApplication.instance = this;
    }

    createChatRoom(name) {
        this.chatRooms.push(name);
    }

    getChatRooms() {
        return this.chatRooms;
    }
}

// Usage
const app1 = new ChatApplication();
const app2 = new ChatApplication();

app1.createChatRoom("General");
console.log(app2.getChatRooms()); // ["General"], demonstrating that app1 and app2 are the same instance.
