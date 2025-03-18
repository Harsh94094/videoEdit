import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterConfigService } from './multer.config';
import { SheetService } from './sheet.service';

@Controller('upload')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {}

  @Post('sheet')
  @UseInterceptors(FileInterceptor('file', MulterConfigService.uploadOptions()))
  async uploadSheet(@UploadedFile() file: Express.Multer.File) {
    return this.sheetService.uploadSheet(file);
  }
}