import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AdService } from './ads.service';

@Controller('ads')
export class AdsController {
  constructor(private readonly adService: AdService) {}

  
  @Get('random')
  async getRandomAd() {
    return this.adService.getRandomAd();
  }

  
  @Post('track-view/:adId')
  async trackAdView(@Param('adId') adId: string) {
    await this.adService.trackView(adId);
    return { message: 'Ad view tracked' };
  }

  
  @Post('track-click/:adId')
  async trackAdClick(@Param('adId') adId: string) {
    await this.adService.trackClick(adId);
    return { message: 'Ad click tracked' };
  }


  @Post('add')
  async addAd(@Body() body: { title: string; videoUrl: string; advertiser: string }) {
    return this.adService.addAd(body.title, body.videoUrl, body.advertiser);
  }
}
