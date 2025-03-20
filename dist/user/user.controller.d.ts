import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(username: string, password: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
