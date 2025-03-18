import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(data: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/admin.schema").AdminDocument> & import("./entities/admin.schema").Admin & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    login(data: any): Promise<{
        token: string;
    }>;
}
