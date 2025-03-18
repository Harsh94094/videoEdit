import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from './entities/admin.schema';
export declare class AuthService {
    private adminModel;
    private jwtService;
    constructor(adminModel: Model<AdminDocument>, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        token: string;
    }>;
    register(email: string, password: string): Promise<import("mongoose").Document<unknown, {}, AdminDocument> & Admin & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
