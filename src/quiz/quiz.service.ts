import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz, QuizDocument } from './entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<QuizDocument>) {}

  async createQuiz(data: any) {
    return this.quizModel.create(data);
  }

  async getQuizzes() {
    return this.quizModel.find();
  }

  async updateQuiz(id: string, data: any) {
    return this.quizModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteQuiz(id: string) {
    return this.quizModel.findByIdAndDelete(id);
  }

  async submitQuiz(data: any) {
    // Logic to evaluate quiz and save result
    
    const result = await this.evaluateQuiz(data);
    return result;

  }

  private async evaluateQuiz(data: any) {
    // Implement quiz evaluation logic
    // Return the result
  }
}
