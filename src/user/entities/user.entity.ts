import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; 
@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Video' }] }) 
  watchHistory: Types.ObjectId[]; 

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Video' }] }) 
  likedVideos: Types.ObjectId[]; 

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Video' }] }) 
  dislikedVideos: Types.ObjectId[]; 
}

export const UserSchema = SchemaFactory.createForClass(User);