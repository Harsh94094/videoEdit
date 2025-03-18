import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema()
export class Quiz {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ type: [String], required: true })
  questions: string[]; 
  
  @Prop({ required: true })
  passingScore: number;

  @Prop({ required: true, default: false })
  isPublished: boolean;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
