import { Repository } from 'typeorm';
import { SheetData } from './entities/sheet.entity';
export declare class SheetService {
    private readonly uploadedDataRepo;
    constructor(uploadedDataRepo: Repository<SheetData>);
    uploadSheet(file: Express.Multer.File): Promise<{
        message: string;
    }>;
}
