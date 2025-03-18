import { Model } from 'mongoose';
import { Student, StudentDocument } from './entities/student.entity';
export declare class StudentService {
    private studentModel;
    constructor(studentModel: Model<StudentDocument>);
    addStudent(data: any): Promise<import("mongoose").Document<unknown, {}, StudentDocument> & Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllStudents(): Promise<(import("mongoose").Document<unknown, {}, StudentDocument> & Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateStudent(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, StudentDocument> & Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    deleteStudent(id: string): Promise<(import("mongoose").Document<unknown, {}, StudentDocument> & Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    assignQuiz(studentId: string, quizId: string): Promise<(import("mongoose").Document<unknown, {}, StudentDocument> & Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
