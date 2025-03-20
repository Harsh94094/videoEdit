import { Model } from 'mongoose';
import { ChatMessage } from './entities/chat.entity';
export declare class ChatService {
    private chatModel;
    constructor(chatModel: Model<ChatMessage>);
    createMessage(data: {
        sender: string;
        message: string;
        room: string;
    }): Promise<import("mongoose").Document<unknown, {}, ChatMessage> & ChatMessage & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getMessagesByRoom(room: string): Promise<(import("mongoose").Document<unknown, {}, ChatMessage> & ChatMessage & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
