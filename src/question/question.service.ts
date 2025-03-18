import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) {}

  async addQuestion(data: any) {

    if (data.type === 'MCQ' && (!data.options || data.options.length < 2)) {
      throw new BadRequestException('MCQ questions must have at least 2 options.');
    }
    if (data.type === 'TRUE_FALSE' && data.correctAnswer !== 'true' && data.correctAnswer !== 'false') {
      throw new BadRequestException('True/False questions must have "true" or "false" as the correct answer.');
    }

    return this.questionModel.create(data);
  }

  async getQuestions() {
    return this.questionModel.find();
  }
}
