import { Model } from 'mongoose';
import { Ad } from './entities/ad.entity';
export declare class AdService {
    private adModel;
    constructor(adModel: Model<Ad>);
    getRandomAd(): Promise<Ad | null>;
    trackView(adId: string): Promise<void>;
    trackClick(adId: string): Promise<void>;
    addAd(title: string, videoUrl: string, advertiser: string): Promise<Ad>;
}
