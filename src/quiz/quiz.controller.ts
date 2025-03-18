import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Post('create')
  create(@Body() data: any) {
    return this.quizService.createQuiz(data);
  }

  @Get()
  getAll() {
    return this.quizService.getQuizzes();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.quizService.updateQuiz(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.quizService.deleteQuiz(id);
  }
  @Post('submit')
  submitQuiz(@Body() data: any) {
    return this.quizService.submitQuiz(data);
  }
}
