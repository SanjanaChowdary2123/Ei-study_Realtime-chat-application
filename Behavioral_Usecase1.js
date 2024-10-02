class ChatRoom {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        this.users = this.users.filter(u => u !== user);
    }

    notifyUsers(message) {
        this.users.forEach(user => user.update(message));
    }

    newMessage(message) {
        this.notifyUsers(message);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`${this.name} received: ${message}`);
    }
}

// Usage
const chatRoom = new ChatRoom();
const user1 = new User("Alice");
const user2 = new User("Bob");

chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.newMessage("Hello, everyone!");