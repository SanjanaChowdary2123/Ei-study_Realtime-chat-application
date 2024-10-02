class Message {
    constructor(content) {
        this.content = content;
    }
}

class TextMessage extends Message {}
class ImageMessage extends Message {}
class VideoMessage extends Message {}

class MessageFactory {
    static createMessage(type, content) {
        switch (type) {
            case "text":
                return new TextMessage(content);
            case "image":
                return new ImageMessage(content);
            case "video":
                return new VideoMessage(content);
            default:
                throw new Error("Unknown message type");
        }
    }
}

// Usage
const textMsg = MessageFactory.createMessage("text", "Hello, world!");
const imageMsg = MessageFactory.createMessage("image", "image.png");
console.log(textMsg, imageMsg);
