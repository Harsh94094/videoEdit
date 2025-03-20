import { Module } from '@nestjs/common';
import { AdService } from './ads.service';
import { AdsController } from './ads.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ad, AdSchema } from './entities/ad.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: Ad.name, schema: AdSchema }])],
  controllers: [AdsController],
  providers: [AdService],
  exports: [AdService, MongooseModule],
})
export class AdsModule {}
