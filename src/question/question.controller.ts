import { Controller, Post, Get, Body, BadRequestException } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post('add')
  async add(@Body() data: any) {
    try {
      return await this.questionService.addQuestion(data);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  getAll() {
    return this.questionService.getQuestions();
  }
}
