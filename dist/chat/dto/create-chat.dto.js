"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChatDto = void 0;
class CreateChatDto {
    sender;
    message;
    room;
    constructor(sender, message, room) {
        this.sender = sender;
        this.message = message;
        this.room = room;
    }
}
exports.CreateChatDto = CreateChatDto;
//# sourceMappingURL=create-chat.dto.js.map