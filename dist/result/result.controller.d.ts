import { ResultService } from './result.service';
export declare class ResultController {
    private resultService;
    constructor(resultService: ResultService);
    submitResult(data: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/result.entity").ResultDocument> & import("./entities/result.entity").Result & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getStudentResults(studentId: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("./entities/result.entity").ResultDocument> & import("./entities/result.entity").Result & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    getQuizResult(studentId: string, quizId: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/result.entity").ResultDocument> & import("./entities/result.entity").Result & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
