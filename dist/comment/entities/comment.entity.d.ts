import { Document } from 'mongoose';
export declare class Comment extends Document {
    videoId: string;
    userId: string;
    text: string;
    replies: Array<{
        userId: string;
        text: string;
    }>;
}
export declare const CommentSchema: import("mongoose").Schema<Comment, import("mongoose").Model<Comment, any, any, any, Document<unknown, any, Comment> & Comment & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Comment, Document<unknown, {}, import("mongoose").FlatRecord<Comment>> & import("mongoose").FlatRecord<Comment> & {
    _id: import("mongoose").Types.ObjectId;
}>;
