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
exports.ResultService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const result_entity_1 = require("./entities/result.entity");
let ResultService = class ResultService {
    resultModel;
    constructor(resultModel) {
        this.resultModel = resultModel;
    }
    async submitResult(studentId, quizId, score, totalMarks) {
        const percentage = (score / totalMarks) * 100;
        return this.resultModel.create({ studentId, quizId, score, totalMarks, percentage });
    }
    async getResultsByStudent(studentId) {
        return this.resultModel.find({ studentId }).populate('quizId');
    }
    async getQuizResult(studentId, quizId) {
        return this.resultModel.findOne({ studentId, quizId });
    }
};
exports.ResultService = ResultService;
exports.ResultService = ResultService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(result_entity_1.Result.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ResultService);
//# sourceMappingURL=result.service.js.map