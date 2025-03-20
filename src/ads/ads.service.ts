import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ad } from './entities/ad.entity';

@Injectable()
export class AdService {
  constructor(@InjectModel(Ad.name) private adModel: Model<Ad>) {}

  // 🔹 Fetch a random ad
  async getRandomAd(): Promise<Ad | null> {
    const ads = await this.adModel.find().exec();
    return ads.length ? ads[Math.floor(Math.random() * ads.length)] : null;
  }

  // 🔹 Track ad views
  async trackView(adId: string): Promise<void> {
    await this.adModel.findByIdAndUpdate(adId, { $inc: { views: 1 } });
  }

  // 🔹 Track ad clicks
  async trackClick(adId: string): Promise<void> {
    await this.adModel.findByIdAndUpdate(adId, { $inc: { clicks: 1 } });
  }

  // 🔹 Add a new ad (for admin)
  async addAd(title: string, videoUrl: string, advertiser: string): Promise<Ad> {
    return this.adModel.create({ title, videoUrl, advertiser });
  }
}
