class ChatComponent {
    add(component) {}
    remove(component) {}
    sendMessage(message) {}
}

class Channel extends ChatComponent {
    constructor(name) {
        super();
        this.name = name;
    }

    sendMessage(message) {
        console.log(`Channel ${this.name}: ${message}`);
    }
}

class GroupChat extends ChatComponent {
    constructor() {
        super();
        this.channels = [];
    }

    add(channel) {
        this.channels.push(channel);
    }

    sendMessage(message) {
        this.channels.forEach(channel => channel.sendMessage(message));
    }
}

// Usage
const groupChat = new GroupChat();
const channel1 = new Channel("General");
const channel2 = new Channel("Support");

groupChat.add(channel1);
groupChat.add(channel2);
groupChat.sendMessage("Welcome to the group!");
