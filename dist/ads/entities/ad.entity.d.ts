import { Document } from 'mongoose';
export declare class Ad extends Document {
    title: string;
    videoUrl: string;
    advertiser: string;
    views: number;
    clicks: number;
}
export declare const AdSchema: import("mongoose").Schema<Ad, import("mongoose").Model<Ad, any, any, any, Document<unknown, any, Ad> & Ad & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Ad, Document<unknown, {}, import("mongoose").FlatRecord<Ad>> & import("mongoose").FlatRecord<Ad> & {
    _id: import("mongoose").Types.ObjectId;
}>;
