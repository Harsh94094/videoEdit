import { Model } from 'mongoose';
import { Quiz, QuizDocument } from './entities/quiz.entity';
export declare class QuizService {
    private quizModel;
    constructor(quizModel: Model<QuizDocument>);
    createQuiz(data: any): Promise<import("mongoose").Document<unknown, {}, QuizDocument> & Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getQuizzes(): Promise<(import("mongoose").Document<unknown, {}, QuizDocument> & Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateQuiz(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, QuizDocument> & Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    deleteQuiz(id: string): Promise<(import("mongoose").Document<unknown, {}, QuizDocument> & Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    submitQuiz(data: any): Promise<void>;
    private evaluateQuiz;
}
