import { Model } from 'mongoose';
import { Result, ResultDocument } from './entities/result.entity';
export declare class ResultService {
    private resultModel;
    constructor(resultModel: Model<ResultDocument>);
    submitResult(studentId: string, quizId: string, score: number, totalMarks: number): Promise<import("mongoose").Document<unknown, {}, ResultDocument> & Result & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getResultsByStudent(studentId: string): Promise<Omit<import("mongoose").Document<unknown, {}, ResultDocument> & Result & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getQuizResult(studentId: string, quizId: string): Promise<(import("mongoose").Document<unknown, {}, ResultDocument> & Result & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
