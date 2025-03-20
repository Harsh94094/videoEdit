import { Document } from 'mongoose';
export declare class Video extends Document {
    title: string;
    filePath: string;
    category: string;
    videoUrl: string;
    tags: string[];
    views: number;
}
export declare const VideoSchema: import("mongoose").Schema<Video, import("mongoose").Model<Video, any, any, any, Document<unknown, any, Video> & Video & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Video, Document<unknown, {}, import("mongoose").FlatRecord<Video>> & import("mongoose").FlatRecord<Video> & {
    _id: import("mongoose").Types.ObjectId;
}>;
