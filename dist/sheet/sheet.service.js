"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SheetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sheet_entity_1 = require("./entities/sheet.entity");
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");
let SheetService = class SheetService {
    uploadedDataRepo;
    constructor(uploadedDataRepo) {
        this.uploadedDataRepo = uploadedDataRepo;
    }
    async uploadSheet(file) {
        console.log('Processing file:', file.path);
        const workbook = xlsx.readFile(file.path, { cellDates: true });
        const sheetName = workbook.SheetNames[0];
        const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: false });
        console.log('Parsed Excel Data:', sheetData);
        const newDataArray = [];
        for (const row of sheetData) {
            console.log('Row:', row);
            const { name, email, age } = row;
            const imageCell = row.image;
            let imageUrl = null;
            if (imageCell && Buffer.isBuffer(imageCell)) {
                const imageName = `${Date.now()}-${name}.png`;
                const imagePath = path.join(__dirname, '../../uploads', imageName);
                fs.writeFileSync(imagePath, imageCell);
                let imageUrl = null;
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
};
exports.SheetService = SheetService;
exports.SheetService = SheetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sheet_entity_1.SheetData)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SheetService);
//# sourceMappingURL=sheet.service.js.map