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
exports.SheetController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_config_1 = require("./multer.config");
const sheet_service_1 = require("./sheet.service");
let SheetController = class SheetController {
    sheetService;
    constructor(sheetService) {
        this.sheetService = sheetService;
    }
    async uploadSheet(file) {
        return this.sheetService.uploadSheet(file);
    }
};
exports.SheetController = SheetController;
__decorate([
    (0, common_1.Post)('sheet'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', multer_config_1.MulterConfigService.uploadOptions())),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SheetController.prototype, "uploadSheet", null);
exports.SheetController = SheetController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [sheet_service_1.SheetService])
], SheetController);
//# sourceMappingURL=sheet.controller.js.map