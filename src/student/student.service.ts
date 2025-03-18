import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Student, StudentDocument } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}

  // Add Student
  async addStudent(data: any) {
    const existingStudent = await this.studentModel.findOne({ email: data.email });
    if (existingStudent) throw new BadRequestException('Email already exists.');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.studentModel.create({ ...data, password: hashedPassword });
  }

 
  async getAllStudents() {
    return this.studentModel.find();
  }

  async updateStudent(id: string, data: any) {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true });
  }


  async deleteStudent(id: string) {
    return this.studentModel.findByIdAndDelete(id);
  }


  async assignQuiz(studentId: string, quizId: string) {
    return this.studentModel.findByIdAndUpdate(studentId, { $push: { assignedQuizzes: quizId } }, { new: true });
  }
}
