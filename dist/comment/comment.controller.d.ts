import { CommentService } from './comment.service';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    addComment(videoId: string, body: {
        userId: string;
        text: string;
    }): Promise<import("./entities/comment.entity").Comment>;
    getComments(videoId: string): Promise<import("./entities/comment.entity").Comment[]>;
    replyToComment(commentId: string, body: {
        userId: string;
        text: string;
    }): Promise<import("./entities/comment.entity").Comment>;
}
