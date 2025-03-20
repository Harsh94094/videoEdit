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
exports.AdService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ad_entity_1 = require("./entities/ad.entity");
let AdService = class AdService {
    adModel;
    constructor(adModel) {
        this.adModel = adModel;
    }
    async getRandomAd() {
        const ads = await this.adModel.find().exec();
        return ads.length ? ads[Math.floor(Math.random() * ads.length)] : null;
    }
    async trackView(adId) {
        await this.adModel.findByIdAndUpdate(adId, { $inc: { views: 1 } });
    }
    async trackClick(adId) {
        await this.adModel.findByIdAndUpdate(adId, { $inc: { clicks: 1 } });
    }
    async addAd(title, videoUrl, advertiser) {
        return this.adModel.create({ title, videoUrl, advertiser });
    }
};
exports.AdService = AdService;
exports.AdService = AdService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ad_entity_1.Ad.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdService);
//# sourceMappingURL=ads.service.js.map