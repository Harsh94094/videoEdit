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
exports.AdsController = void 0;
const common_1 = require("@nestjs/common");
const ads_service_1 = require("./ads.service");
let AdsController = class AdsController {
    adService;
    constructor(adService) {
        this.adService = adService;
    }
    async getRandomAd() {
        return this.adService.getRandomAd();
    }
    async trackAdView(adId) {
        await this.adService.trackView(adId);
        return { message: 'Ad view tracked' };
    }
    async trackAdClick(adId) {
        await this.adService.trackClick(adId);
        return { message: 'Ad click tracked' };
    }
    async addAd(body) {
        return this.adService.addAd(body.title, body.videoUrl, body.advertiser);
    }
};
exports.AdsController = AdsController;
__decorate([
    (0, common_1.Get)('random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "getRandomAd", null);
__decorate([
    (0, common_1.Post)('track-view/:adId'),
    __param(0, (0, common_1.Param)('adId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "trackAdView", null);
__decorate([
    (0, common_1.Post)('track-click/:adId'),
    __param(0, (0, common_1.Param)('adId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "trackAdClick", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdsController.prototype, "addAd", null);
exports.AdsController = AdsController = __decorate([
    (0, common_1.Controller)('ads'),
    __metadata("design:paramtypes", [ads_service_1.AdService])
], AdsController);
//# sourceMappingURL=ads.controller.js.map