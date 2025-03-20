import { Model } from 'mongoose';
import { Subscription } from './entities/subcripation-plan.entity';
export declare class SubscriptionService {
    private subModel;
    constructor(subModel: Model<Subscription>);
    subscribe(userId: string, plan: string): Promise<import("mongoose").Document<unknown, {}, Subscription> & Subscription & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
