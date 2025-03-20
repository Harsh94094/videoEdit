import { Document, Types } from 'mongoose';
export declare class User extends Document {
    username: string;
    password: string;
    watchHistory: Types.ObjectId[];
    likedVideos: Types.ObjectId[];
    dislikedVideos: Types.ObjectId[];
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: Types.ObjectId;
}>;
