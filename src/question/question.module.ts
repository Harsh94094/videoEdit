import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question, QuestionSchema } from './entities/question.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:Question.name,schema:QuestionSchema}])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
