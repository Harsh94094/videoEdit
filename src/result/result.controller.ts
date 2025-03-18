import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ResultService } from './result.service';

@Controller('result')
export class ResultController {
  constructor(private resultService: ResultService) {}

  @Post('submit')
  submitResult(@Body() data: any) {
    return this.resultService.submitResult(data.studentId, data.quizId, data.score, data.totalMarks);
  }

  @Get('student/:studentId')
  getStudentResults(@Param('studentId') studentId: string) {
    return this.resultService.getResultsByStudent(studentId);
  }


  @Get('quiz/:studentId/:quizId')
  getQuizResult(@Param('studentId') studentId: string, @Param('quizId') quizId: string) {
    return this.resultService.getQuizResult(studentId, quizId);
  }
} 
