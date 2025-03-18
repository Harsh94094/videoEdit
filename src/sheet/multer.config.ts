import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class MulterConfigService {
  static uploadOptions() {
    return {
      storage: diskStorage({
        destination: './uploads', // Folder to store images
        filename: (req, file, cb) => {
          const fileExt = extname(file.originalname);
          const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${fileExt}`;
          cb(null, fileName);
        },
      }),
    };
  }
}
