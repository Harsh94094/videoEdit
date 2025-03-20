import { Model } from 'mongoose';
import { User } from './entities/user.entity';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(username: string, password: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findUser(username: string): Promise<(import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
