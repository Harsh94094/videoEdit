import { AdService } from './ads.service';
export declare class AdsController {
    private readonly adService;
    constructor(adService: AdService);
    getRandomAd(): Promise<import("./entities/ad.entity").Ad | null>;
    trackAdView(adId: string): Promise<{
        message: string;
    }>;
    trackAdClick(adId: string): Promise<{
        message: string;
    }>;
    addAd(body: {
        title: string;
        videoUrl: string;
        advertiser: string;
    }): Promise<import("./entities/ad.entity").Ad>;
}
