import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result, ResultDocument } from './entities/result.entity';

@Injectable()
export class ResultService {
  constructor(@InjectModel(Result.name) private resultModel: Model<ResultDocument>) {}

  async submitResult(studentId: string, quizId: string, score: number, totalMarks: number) {
    const percentage = (score / totalMarks) * 100;
    return this.resultModel.create({ studentId, quizId, score, totalMarks, percentage });
  }

  async getResultsByStudent(studentId: string) {
    return this.resultModel.find({ studentId }).populate('quizId');
  }

  async getQuizResult(studentId: string, quizId: string) {
    return this.resultModel.findOne({ studentId, quizId });
  }
}
