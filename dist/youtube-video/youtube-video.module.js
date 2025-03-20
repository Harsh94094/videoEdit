"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeVideoModule = void 0;
const common_1 = require("@nestjs/common");
const youtube_video_service_1 = require("./youtube-video.service");
const youtube_video_controller_1 = require("./youtube-video.controller");
const mongoose_1 = require("@nestjs/mongoose");
const youtube_video_entity_1 = require("./entities/youtube-video.entity");
const ads_controller_1 = require("../ads/ads.controller");
const ads_service_1 = require("../ads/ads.service");
const subcripation_plan_entity_1 = require("../subcripation-plan/entities/subcripation-plan.entity");
const rxjs_1 = require("rxjs");
const ads_module_1 = require("../ads/ads.module");
let YoutubeVideoModule = class YoutubeVideoModule {
};
exports.YoutubeVideoModule = YoutubeVideoModule;
exports.YoutubeVideoModule = YoutubeVideoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Video', schema: youtube_video_entity_1.VideoSchema },
                { name: rxjs_1.Subscription.name, schema: subcripation_plan_entity_1.SubscriptionSchema },
            ]),
            ads_module_1.AdsModule,
        ],
        controllers: [youtube_video_controller_1.VideoController, ads_controller_1.AdsController],
        providers: [youtube_video_service_1.VideoService, ads_service_1.AdService],
    })
], YoutubeVideoModule);
//# sourceMappingURL=youtube-video.module.js.map