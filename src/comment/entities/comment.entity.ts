import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({ required: true }) // Ensure videoId is required
  videoId: string;

  @Prop({ required: true }) // Ensure userId is required
  userId: string;

  @Prop({ required: true }) // Ensure text is required
  text: string;

  @Prop({
    type: [
      {
        userId: { type: String, required: true },
        text: { type: String, required: true },
      },
    ],
    default: [],
  })
  replies: Array<{ userId: string; text: string }>;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);