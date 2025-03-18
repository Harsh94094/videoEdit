import { UploadService } from './uploadServices';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadFile(file: Express.Multer.File): {
        message: string;
        filePath: string;
    };
}
