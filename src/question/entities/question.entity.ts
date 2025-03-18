import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop({ required: true })
  text: string; 

  @Prop({ required: true, enum: ['MCQ', 'TRUE_FALSE', 'SHORT_ANSWER'] })
  type: string; 

  @Prop({ type: [String], default: [] }) 
  options?: string[]; 

  @Prop({ required: true, type: String }) 
  correctAnswer: string;

  @Prop({ required: true })
  marks: number; 
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
