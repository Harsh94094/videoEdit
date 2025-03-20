import { Module } from '@nestjs/common';
import { VideoService } from './youtube-video.service';
import { VideoController } from './youtube-video.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoSchema } from './entities/youtube-video.entity';

import { AdsController } from 'src/ads/ads.controller';
import { AdService } from 'src/ads/ads.service';

import { SubscriptionSchema } from 'src/subcripation-plan/entities/subcripation-plan.entity';
import { Subscription } from 'rxjs';
import { AdsModule } from 'src/ads/ads.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Video', schema: VideoSchema },
      { name: Subscription.name, schema: SubscriptionSchema }, 
    ]),
    AdsModule,
  ],
  controllers: [VideoController, AdsController],
  providers: [VideoService, AdService],
})
export class YoutubeVideoModule {}