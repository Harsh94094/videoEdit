import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResultDocument = Result & Document;

@Schema()
export class Result {
  @Prop({ required: true })
  studentId: string;

  @Prop({ required: true })
  quizId: string;

  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  totalMarks: number;

  @Prop({ required: true })
  percentage: number;
}

export const ResultSchema = SchemaFactory.createForClass(Result);
