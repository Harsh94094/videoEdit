import { Document } from 'mongoose';
export type StudentDocument = Student & Document;
export declare class Student {
    name: string;
    email: string;
    password: string;
    assignedQuizzes: string[];
}
export declare const StudentSchema: import("mongoose").Schema<Student, import("mongoose").Model<Student, any, any, any, Document<unknown, any, Student> & Student & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Student, Document<unknown, {}, import("mongoose").FlatRecord<Student>> & import("mongoose").FlatRecord<Student> & {
    _id: import("mongoose").Types.ObjectId;
}>;
