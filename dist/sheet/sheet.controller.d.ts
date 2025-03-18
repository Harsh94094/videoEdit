import { SheetService } from './sheet.service';
export declare class SheetController {
    private readonly sheetService;
    constructor(sheetService: SheetService);
    uploadSheet(file: Express.Multer.File): Promise<{
        message: string;
    }>;
}
