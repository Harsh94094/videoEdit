import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':videoId')
  async addComment(@Param('videoId') videoId: string, @Body() body: { userId: string; text: string }) {
    return this.commentService.addComment(videoId, body.userId, body.text);
  }

  @Get(':videoId')
  async getComments(@Param('videoId') videoId: string) {
    return this.commentService.getComments(videoId);
  }

  @Post('reply/:commentId')
  async replyToComment(@Param('commentId') commentId: string, @Body() body: { userId: string; text: string }) {
    return this.commentService.replyToComment(commentId, body.userId, body.text);
  }
}
