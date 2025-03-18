import { QuizService } from './quiz.service';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/quiz.entity").QuizDocument> & import("./entities/quiz.entity").Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/quiz.entity").QuizDocument> & import("./entities/quiz.entity").Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    update(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, import("./entities/quiz.entity").QuizDocument> & import("./entities/quiz.entity").Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/quiz.entity").QuizDocument> & import("./entities/quiz.entity").Quiz & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    submitQuiz(data: any): Promise<void>;
}
