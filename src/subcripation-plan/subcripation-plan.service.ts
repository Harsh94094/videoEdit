import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from './entities/subcripation-plan.entity';
import * as Stripe from 'stripe';

@Injectable()
export class SubscriptionService {
  // private stripe = new Stripe("your_stripe_secret_key", { apiVersion: "2023-10-17" });

  constructor(@InjectModel(Subscription.name) private subModel: Model<Subscription>) {}

  async subscribe(userId: string, plan: string) {
    // Create and save the subscription in one step
    const subscription = await this.subModel.create({
      userId,
      plan,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Set expiration date to 30 days from now
    });
  
    return subscription; // Return the created subscription
  }
}
