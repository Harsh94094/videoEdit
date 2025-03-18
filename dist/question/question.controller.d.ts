import { QuestionService } from './question.service';
export declare class QuestionController {
    private questionService;
    constructor(questionService: QuestionService);
    add(data: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/question.entity").QuestionDocument> & import("./entities/question.entity").Question & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/question.entity").QuestionDocument> & import("./entities/question.entity").Question & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
