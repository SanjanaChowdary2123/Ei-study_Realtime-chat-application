class SendMessageCommand {
    constructor(chatRoom, message) {
        this.chatRoom = chatRoom;
        this.message = message;
    }

    execute() {
        this.chatRoom.newMessage(this.message);
    }

    undo() {
        console.log(`Undo message: ${this.message}`);
    }
}

class ChatApplication {
    constructor() {
        this.commandHistory = [];
    }

    sendMessage(chatRoom, message) {
        const command = new SendMessageCommand(chatRoom, message);
        command.execute();
        this.commandHistory.push(command);
    }

    undoLastMessage() {
        const command = this.commandHistory.pop();
        if (command) {
            command.undo();
        }
    }
}

// Usage
const chatApp = new ChatApplication();
chatApp.sendMessage(chatRoom, "Hi there!");
chatApp.undoLastMessage();
