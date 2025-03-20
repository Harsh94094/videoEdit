import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async addComment(videoId: string, userId: string, text: string): Promise<Comment> {
    const comment = new this.commentModel({ videoId, userId, text, replies: [] });
    return comment.save();
  }

  async getComments(videoId: string): Promise<Comment[]> {
    return this.commentModel.find({ videoId }).populate('replies');
  }

  async replyToComment(commentId: string, userId: string, text: string): Promise<Comment> {
    const updatedComment = await this.commentModel.findByIdAndUpdate(
        commentId,
        { $push: { replies: { userId, text } } },
        { new: true } 
    );

    if (!updatedComment) {
      throw new Error('Comment not found');
    }

 

    return updatedComment;
}


    
}
