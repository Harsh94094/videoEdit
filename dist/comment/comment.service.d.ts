import { Model } from 'mongoose';
import { Comment } from './entities/comment.entity';
export declare class CommentService {
    private commentModel;
    constructor(commentModel: Model<Comment>);
    addComment(videoId: string, userId: string, text: string): Promise<Comment>;
    getComments(videoId: string): Promise<Comment[]>;
    replyToComment(commentId: string, userId: string, text: string): Promise<Comment>;
}
