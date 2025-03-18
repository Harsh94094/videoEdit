import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { ResultModule } from './result/result.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';
import { SheetModule } from './sheet/sheet.module';
import { VideoModule } from './video/video.module';
import { UploadController } from './video/uploadController';
import { UploadService } from './video/uploadServices';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    QuestionModule,
    ResultModule,
    StudentModule, 
    AuthModule,
    QuizModule,
    VideoModule,
    
  ],
  controllers: [AppController,UploadController],
  providers: [AppService,UploadService],
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { SheetData } from './sheet/entities/sheet.entity';
// import { SheetModule } from './sheet/sheet.module';


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mongodb',
//       url: 'mongodb://localhost:27017/nest',
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       entities: [SheetData],
//     }),
//     SheetModule,
//     TypeOrmModule.forFeature([SheetData]),
//   ],
// })
// export class AppModule {}



