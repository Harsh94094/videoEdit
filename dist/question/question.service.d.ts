import { Model } from 'mongoose';
import { Question, QuestionDocument } from './entities/question.entity';
export declare class QuestionService {
    private questionModel;
    constructor(questionModel: Model<QuestionDocument>);
    addQuestion(data: any): Promise<import("mongoose").Document<unknown, {}, QuestionDocument> & Question & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getQuestions(): Promise<(import("mongoose").Document<unknown, {}, QuestionDocument> & Question & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
