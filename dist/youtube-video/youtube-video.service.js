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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const youtube_video_entity_1 = require("./entities/youtube-video.entity");
const fs = require("fs");
const path = require("path");
const rxjs_1 = require("rxjs");
const ads_service_1 = require("../ads/ads.service");
let VideoService = class VideoService {
    videoModel;
    subModel;
    adService;
    constructor(videoModel, subModel, adService) {
        this.videoModel = videoModel;
        this.subModel = subModel;
        this.adService = adService;
    }
    async uploadVideo(file, title, category, tags) {
        const newVideo = new this.videoModel({ title, filePath: file.path, category, tags, views: 0 });
        return newVideo.save();
    }
    async streamVideoWithAd(videoId, userId) {
        const subscription = await this.subModel.findOne({ userId, plan: 'Premium' });
        if (subscription) {
            return { videoUrl: await this.getVideoUrl(videoId), isAd: false };
        }
        const ad = await this.adService.getRandomAd();
        if (!ad) {
            return { videoUrl: await this.getVideoUrl(videoId), isAd: false };
        }
        await this.adService.trackView(ad._id);
        return { videoUrl: ad.videoUrl, isAd: true, nextVideo: videoId };
    }
    async getVideoUrl(videoId) {
        const video = (await this.videoModel.findById(videoId));
        return video ? video.videoUrl : '';
    }
    async streamVideo(filename, range, res) {
        const filePath = path.join(__dirname, '..', '..', 'uploads', 'videos', filename);
        if (!fs.existsSync(filePath))
            throw new common_1.NotFoundException('Video not found');
        const stat = fs.statSync(filePath);
        const fileSize = stat.size;
        res.writeHead(200, { 'Content-Length': fileSize, 'Content-Type': 'video/mp4' });
        fs.createReadStream(filePath).pipe(res);
    }
    async incrementViews(videoId) {
        await this.videoModel.findByIdAndUpdate(videoId, { $inc: { views: 1 } });
    }
    async searchVideos(query) {
        return this.videoModel.find({ title: { $regex: query, $options: 'i' } });
    }
    async getRecommendedVideos(userId) {
        const allVideos = await this.videoModel.find();
        return allVideos.slice(0, 10);
    }
};
exports.VideoService = VideoService;
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(youtube_video_entity_1.Video.name)),
    __param(1, (0, mongoose_1.InjectModel)(rxjs_1.Subscription.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        ads_service_1.AdService])
], VideoService);
//# sourceMappingURL=youtube-video.service.js.map