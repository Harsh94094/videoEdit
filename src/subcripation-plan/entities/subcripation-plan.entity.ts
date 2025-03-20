import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Subscription extends Document {
  @Prop({ required: true }) // Ensure userId is required
  userId: string;

  @Prop({ required: true }) // Ensure plan is required
  plan: string;

  @Prop({ required: true }) // Ensure expiresAt is required
  expiresAt: Date;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);