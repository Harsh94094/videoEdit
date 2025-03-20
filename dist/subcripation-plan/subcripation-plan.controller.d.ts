import { SubscriptionService } from './subcripation-plan.service';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    subscribe(body: {
        userId: string;
        plan: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./entities/subcripation-plan.entity").Subscription> & import("./entities/subcripation-plan.entity").Subscription & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
