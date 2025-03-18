"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const question_module_1 = require("./question/question.module");
const result_module_1 = require("./result/result.module");
const student_module_1 = require("./student/student.module");
const auth_module_1 = require("./auth/auth.module");
const quiz_module_1 = require("./quiz/quiz.module");
const video_module_1 = require("./video/video.module");
const uploadController_1 = require("./video/uploadController");
const uploadServices_1 = require("./video/uploadServices");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/nest'),
            question_module_1.QuestionModule,
            result_module_1.ResultModule,
            student_module_1.StudentModule,
            auth_module_1.AuthModule,
            quiz_module_1.QuizModule,
            video_module_1.VideoModule,
        ],
        controllers: [app_controller_1.AppController, uploadController_1.UploadController],
        providers: [app_service_1.AppService, uploadServices_1.UploadService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map