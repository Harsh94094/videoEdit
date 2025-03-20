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
const platform_express_1 = require("@nestjs/platform-express");
const youtube_video_service_1 = require("./youtube-video.service");
const multer_1 = require("multer");
const path_1 = require("path");
let VideoController = class VideoController {
    videoService;
    constructor(videoService) {
        this.videoService = videoService;
    }
    async uploadVideo(file, title, category, tags) {
        if (!file) {
            throw new Error('No file uploaded!');
        }
        return this.videoService.uploadVideo(file, title, category, tags.split(','));
    }
    async streamVideoByFilename(filename, res) {
        console.log(res);
        return this.videoService.streamVideo(filename, res.req.headers.range, res);
    }
    async streamVideoWithAd(videoId, userId) {
        return this.videoService.streamVideoWithAd(videoId, userId);
    }
    async incrementViews(id) {
        await this.videoService.incrementViews(id);
        return { message: 'View count updated' };
    }
    async searchVideos(query) {
        return this.videoService.searchVideos(query);
    }
    async getRecommendations(userId) {
        return this.videoService.getRecommendedVideos(userId);
    }
};
exports.VideoController = VideoController;
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/videos',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                callback(null, uniqueSuffix + (0, path_1.extname)(file.originalname));
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)('title')),
    __param(2, (0, common_1.Query)('category')),
    __param(3, (0, common_1.Query)('tags')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "uploadVideo", null);
__decorate([
    (0, common_1.Get)('stream/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "streamVideoByFilename", null);
__decorate([
    (0, common_1.Get)('stream/:videoId/:userId'),
    __param(0, (0, common_1.Param)('videoId')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "streamVideoWithAd", null);
__decorate([
    (0, common_1.Patch)('view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "incrementViews", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "searchVideos", null);
__decorate([
    (0, common_1.Get)('recommendations'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getRecommendations", null);
exports.VideoController = VideoController = __decorate([
    (0, common_1.Controller)('videos'),
    __metadata("design:paramtypes", [youtube_video_service_1.VideoService])
], VideoController);
//# sourceMappingURL=youtube-video.controller.js.map