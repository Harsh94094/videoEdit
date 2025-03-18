import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('add')
  addStudent(@Body() data: any) {
    return this.studentService.addStudent(data);
  }

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() data: any) {
    return this.studentService.updateStudent(id, data);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(id);
  }

  @Post('assign-quiz/:studentId/:quizId')
  assignQuiz(@Param('studentId') studentId: string, @Param('quizId') quizId: string) {
    return this.studentService.assignQuiz(studentId, quizId);
  }


}
