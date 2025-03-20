import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Ad extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  videoUrl: string; // Ad video URL

  @Prop({ required: true })
  advertiser: string; // Advertiser name

  @Prop({ default: 0 })
  views: number;

  @Prop({ default: 0 })
  clicks: number;
}

export const AdSchema = SchemaFactory.createForClass(Ad);
