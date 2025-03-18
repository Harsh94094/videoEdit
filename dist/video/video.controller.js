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
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const video_service_1 = require("./video.service");
let VideoController = class VideoController {
    videoService;
    constructor(videoService) {
        this.videoService = videoService;
    }
    async editVideo(filename, brightness, saturation, contrast, sharpness, blur, grayscale, rotate, width, height, speed, mute, reverse, watermark, subtitles) {
        const filters = {
            brightness: brightness ? parseFloat(brightness) : undefined,
            saturation: saturation ? parseFloat(saturation) : undefined,
            contrast: contrast ? parseFloat(contrast) : undefined,
            sharpness: sharpness ? parseFloat(sharpness) : undefined,
            blur: blur ? parseFloat(blur) : undefined,
            grayscale: grayscale === 'true' ? true : undefined,
            rotate: rotate ? parseFloat(rotate) : undefined,
            width: width ? parseInt(width) : undefined,
            height: height ? parseInt(height) : undefined,
            speed: speed ? parseFloat(speed) : undefined,
            mute: mute === 'true' ? true : undefined,
            reverse: reverse === 'true' ? true : undefined,
            watermark: watermark || undefined,
            subtitles: subtitles || undefined,
        };
        const editedFilePath = await this.videoService.applyFilters(filename, filters);
        return { message: 'Video edited successfully', filePath: editedFilePath };
    }
    async convertFormat(filename, format) {
        const convertedFilePath = await this.videoService.convertFormat(filename, format);
        return { message: 'Video converted successfully', filePath: convertedFilePath };
    }
    async cutVideo(filename, startTime, duration) {
        const cutFilePath = await this.videoService.cutVideo(filename, parseFloat(startTime), parseFloat(duration));
        return { message: 'Video cut successfully', filePath: cutFilePath };
    }
    async extractAudio(filename, format) {
        const audioFilePath = await this.videoService.extractAudio(filename, format);
        return { message: 'Audio extracted successfully', filePath: audioFilePath };
    }
    async mergeVideos(files) {
        const fileList = files.split(',').map(file => file.trim());
        const mergedFilePath = await this.videoService.mergeVideos(fileList);
        return { message: 'Videos merged successfully', filePath: mergedFilePath };
    }
    async generateThumbnail(filename, time) {
        const thumbnailPath = await this.videoService.generateThumbnail(filename, parseFloat(time));
        return { message: 'Thumbnail generated successfully', filePath: thumbnailPath };
    }
};
exports.VideoController = VideoController;
__decorate([
    (0, common_1.Get)('edit'),
    __param(0, (0, common_1.Query)('filename')),
    __param(1, (0, common_1.Query)('brightness')),
    __param(2, (0, common_1.Query)('saturation')),
    __param(3, (0, common_1.Query)('contrast')),
    __param(4, (0, common_1.Query)('sharpness')),
    __param(5, (0, common_1.Query)('blur')),
    __param(6, (0, common_1.Query)('grayscale')),
    __param(7, (0, common_1.Query)('rotate')),
    __param(8, (0, common_1.Query)('width')),
    __param(9, (0, common_1.Query)('height')),
    __param(10, (0, common_1.Query)('speed')),
    __param(11, (0, common_1.Query)('mute')),
    __param(12, (0, common_1.Query)('reverse')),
    __param(13, (0, common_1.Query)('watermark')),
    __param(14, (0, common_1.Query)('subtitles')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "editVideo", null);
__decorate([
    (0, common_1.Get)('convert'),
    __param(0, (0, common_1.Query)('filename')),
    __param(1, (0, common_1.Query)('format')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "convertFormat", null);
__decorate([
    (0, common_1.Get)('cut'),
    __param(0, (0, common_1.Query)('filename')),
    __param(1, (0, common_1.Query)('startTime')),
    __param(2, (0, common_1.Query)('duration')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "cutVideo", null);
__decorate([
    (0, common_1.Get)('extract-audio'),
    __param(0, (0, common_1.Query)('filename')),
    __param(1, (0, common_1.Query)('format')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "extractAudio", null);
__decorate([
    (0, common_1.Get)('merge'),
    __param(0, (0, common_1.Query)('files')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "mergeVideos", null);
__decorate([
    (0, common_1.Get)('thumbnail'),
    __param(0, (0, common_1.Query)('filename')),
    __param(1, (0, common_1.Query)('time')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "generateThumbnail", null);
exports.VideoController = VideoController = __decorate([
    (0, common_1.Controller)('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
//# sourceMappingURL=video.controller.js.map