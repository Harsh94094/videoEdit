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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcryptjs");
const student_entity_1 = require("./entities/student.entity");
let StudentService = class StudentService {
    studentModel;
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async addStudent(data) {
        const existingStudent = await this.studentModel.findOne({ email: data.email });
        if (existingStudent)
            throw new common_1.BadRequestException('Email already exists.');
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.studentModel.create({ ...data, password: hashedPassword });
    }
    async getAllStudents() {
        return this.studentModel.find();
    }
    async updateStudent(id, data) {
        return this.studentModel.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteStudent(id) {
        return this.studentModel.findByIdAndDelete(id);
    }
    async assignQuiz(studentId, quizId) {
        return this.studentModel.findByIdAndUpdate(studentId, { $push: { assignedQuizzes: quizId } }, { new: true });
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_entity_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentService);
//# sourceMappingURL=student.service.js.map