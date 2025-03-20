import { Controller, Post, Body, Param } from '@nestjs/common';
import { SubscriptionService } from './subcripation-plan.service';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  async subscribe(@Body() body: { userId: string; plan: string }) {
    return this.subscriptionService.subscribe(body.userId, body.plan);
  }
}
