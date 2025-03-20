import { Module } from '@nestjs/common';
import { SubscriptionService } from './subcripation-plan.service';
import { SubscriptionController } from './subcripation-plan.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscription } from 'rxjs';
import { SubscriptionSchema } from './entities/subcripation-plan.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: Subscription.name, schema: SubscriptionSchema }])],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
})
export class SubcripationPlanModule {}
