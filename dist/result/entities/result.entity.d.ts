import { Document } from 'mongoose';
export type ResultDocument = Result & Document;
export declare class Result {
    studentId: string;
    quizId: string;
    score: number;
    totalMarks: number;
    percentage: number;
}
export declare const ResultSchema: import("mongoose").Schema<Result, import("mongoose").Model<Result, any, any, any, Document<unknown, any, Result> & Result & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Result, Document<unknown, {}, import("mongoose").FlatRecord<Result>> & import("mongoose").FlatRecord<Result> & {
    _id: import("mongoose").Types.ObjectId;
}>;
