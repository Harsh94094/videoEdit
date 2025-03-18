"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const quiz_entity_1 = require("./entities/quiz.entity");
let QuizService = class QuizService {
    quizModel;
    constructor(quizModel) {
        this.quizModel = quizModel;
    }
    async createQuiz(data) {
        return this.quizModel.create(data);
    }
    async getQuizzes() {
        return this.quizModel.find();
    }
    async updateQuiz(id, data) {
        return this.quizModel.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteQuiz(id) {
        return this.quizModel.findByIdAndDelete(id);
    }
    async submitQuiz(data) {
        const result = await this.evaluateQuiz(data);
        return result;
    }
    async evaluateQuiz(data) {
    }
};
exports.QuizService = QuizService;
exports.QuizService = QuizService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(quiz_entity_1.Quiz.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QuizService);
//# sourceMappingURL=quiz.service.js.map