import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatMessage } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ChatMessage.name) private chatModel: Model<ChatMessage>,
  ) {}

  async createMessage(data: { sender: string; message: string; room: string }) {
    return new this.chatModel(data).save();
  }

  async getMessagesByRoom(room: string) {
    return this.chatModel.find({ room }).sort({ createdAt: 1 }).exec();
  }
}
