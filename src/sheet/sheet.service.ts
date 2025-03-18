import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SheetData } from './entities/sheet.entity';
import * as xlsx from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SheetService {
  constructor(
    @InjectRepository(SheetData)
    private readonly uploadedDataRepo: Repository<SheetData>,
  ) {}

  async uploadSheet(file: Express.Multer.File) {
    console.log('Processing file:', file.path);
  
    const workbook = xlsx.readFile(file.path, { cellDates: true });
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: false });
  
    console.log('Parsed Excel Data:', sheetData);
  
    const newDataArray: SheetData[] = [];
  
    for (const row of sheetData as any[]) {
      console.log('Row:', row);
  
      const { name, email, age } = row;
      
     
      const imageCell = row.image;
      let imageUrl = null;
  
      if (imageCell && Buffer.isBuffer(imageCell)) {
        const imageName = `${Date.now()}-${name}.png`; // Unique filename
        const imagePath = path.join(__dirname, '../../uploads', imageName);
  
       
        fs.writeFileSync(imagePath, imageCell);
  
        let imageUrl: string | null = null;  
      }
  
      console.log(`Image stored at: ${imageUrl}`);
  
      const newData = this.uploadedDataRepo.create({
        name,
        email,
        age,
        imageUrl,
      });
  
      console.log('Creating new data:', newData);
      newDataArray.push(newData);
    }
  
    console.log('Saving data array:', newDataArray);
    await this.uploadedDataRepo.save(newDataArray);
  
    console.log('Data saved successfully');
    return { message: 'Data stored in MongoDB' };
  }
  
}