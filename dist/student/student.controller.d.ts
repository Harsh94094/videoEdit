import { StudentService } from './student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    addStudent(data: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/student.entity").StudentDocument> & import("./entities/student.entity").Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllStudents(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/student.entity").StudentDocument> & import("./entities/student.entity").Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateStudent(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, import("./entities/student.entity").StudentDocument> & import("./entities/student.entity").Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    deleteStudent(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/student.entity").StudentDocument> & import("./entities/student.entity").Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    assignQuiz(studentId: string, quizId: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/student.entity").StudentDocument> & import("./entities/student.entity").Student & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
