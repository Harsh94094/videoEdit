import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Video extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  filePath: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  videoUrl: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ default: 0 })
  views: number;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
