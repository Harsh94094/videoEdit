import { Document } from 'mongoose';
export type QuestionDocument = Question & Document;
export declare class Question {
    text: string;
    type: string;
    options?: string[];
    correctAnswer: string;
    marks: number;
}
export declare const QuestionSchema: import("mongoose").Schema<Question, import("mongoose").Model<Question, any, any, any, Document<unknown, any, Question> & Question & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Question, Document<unknown, {}, import("mongoose").FlatRecord<Question>> & import("mongoose").FlatRecord<Question> & {
    _id: import("mongoose").Types.ObjectId;
}>;
