import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheetData } from './entities/sheet.entity';
import { SheetService } from './sheet.service';
import { SheetController } from './sheet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SheetData])], // Correct entity import
  controllers: [SheetController],
  providers: [SheetService],
})
export class SheetModule {}
