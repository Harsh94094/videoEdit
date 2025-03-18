"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs");
let VideoService = class VideoService {
    uploadPath = './uploads';
    async applyFilters(filename, filters) {
        const inputPath = path.join(this.uploadPath, filename);
        const outputFilename = `edited-${filename}`;
        const outputPath = path.join(this.uploadPath, outputFilename);
        return new Promise((resolve, reject) => {
            let command = ffmpeg(inputPath);
            if (filters.brightness)
                command.videoFilters(`eq=brightness=${filters.brightness}`);
            if (filters.saturation)
                command.videoFilters(`eq=saturation=${filters.saturation}`);
            if (filters.contrast)
                command.videoFilters(`eq=contrast=${filters.contrast}`);
            if (filters.blur)
                command.videoFilters(`boxblur=${filters.blur}`);
            if (filters.grayscale)
                command.videoFilters('hue=s=0');
            if (filters.width && filters.height)
                command.size(`${filters.width}x${filters.height}`);
            if (filters.rotate)
                command.videoFilters(`rotate=${filters.rotate}`);
            if (filters.speed)
                command.videoFilters(`setpts=${1 / filters.speed}*PTS`).audioFilters(`atempo=${filters.speed}`);
            if (filters.mute)
                command.noAudio();
            if (filters.reverse)
                command.videoFilters('reverse').audioFilters('areverse');
            if (filters.watermark) {
                const watermarkPath = path.join(this.uploadPath, filters.watermark);
                command.videoFilters(`movie=${watermarkPath} [watermark]; [in][watermark] overlay=10:10 [out]`);
            }
            if (filters.subtitles) {
                const subtitlesPath = path.join(this.uploadPath, filters.subtitles);
                command.outputOptions(`-vf subtitles=${subtitlesPath}`);
            }
            command
                .save(outputPath)
                .on('end', () => resolve(`/uploads/${outputFilename}`))
                .on('error', (err) => reject(err));
        });
    }
    async convertFormat(filename, format) {
        const inputPath = path.join(this.uploadPath, filename);
        const outputFilename = `converted-${filename.split('.')[0]}.${format}`;
        const outputPath = path.join(this.uploadPath, outputFilename);
        return new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .toFormat(format)
                .save(outputPath)
                .on('end', () => resolve(`/uploads/${outputFilename}`))
                .on('error', (err) => reject(err));
        });
    }
    async cutVideo(filename, startTime, duration) {
        const inputPath = path.join(this.uploadPath, filename);
        const outputFilename = `cut-${filename}`;
        const outputPath = path.join(this.uploadPath, outputFilename);
        return new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .setStartTime(startTime)
                .setDuration(duration)
                .save(outputPath)
                .on('end', () => resolve(`/uploads/${outputFilename}`))
                .on('error', (err) => reject(err));
        });
    }
    async extractAudio(filename, format) {
        const inputPath = path.join(this.uploadPath, filename);
        const outputFilename = `audio-${filename.split('.')[0]}.${format}`;
        const outputPath = path.join(this.uploadPath, outputFilename);
        return new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .noVideo()
                .toFormat(format)
                .save(outputPath)
                .on('end', () => resolve(`/uploads/${outputFilename}`))
                .on('error', (err) => reject(err));
        });
    }
    async mergeVideos(files) {
        const convertedFiles = await Promise.all(files.map(async (file) => {
            const outputFilename = `converted-${file}.mp4`;
            const outputPath = path.join(this.uploadPath, outputFilename);
            return new Promise((resolve, reject) => {
                ffmpeg(path.join(this.uploadPath, file))
                    .output(outputPath)
                    .videoCodec('libx264')
                    .audioCodec('aac')
                    .format('mp4')
                    .on('end', () => resolve(outputFilename))
                    .on('error', (err) => reject(err))
                    .run();
            });
        }));
        return this.concatenateVideos(convertedFiles);
    }
    async concatenateVideos(files) {
        const outputFilename = `merged-${Date.now()}.mp4`;
        const outputPath = path.join(this.uploadPath, outputFilename);
        const tempFileList = path.join(this.uploadPath, 'file-list.txt');
        fs.writeFileSync(tempFileList, files.map(f => `file '${f}'`).join('\n'));
        return new Promise((resolve, reject) => {
            ffmpeg()
                .input(tempFileList)
                .inputFormat('concat')
                .outputOptions('-safe 0')
                .output(outputPath)
                .on('end', () => resolve(`/uploads/${outputFilename}`))
                .on('error', (err) => reject(err))
                .run();
        });
    }
    async generateThumbnail(filename, time) {
        const inputPath = path.join(this.uploadPath, filename);
        const outputFilename = `thumbnail-${Date.now()}.jpg`;
        const outputPath = path.join(this.uploadPath, outputFilename);
        return new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .screenshots({
                timestamps: [time],
                filename: outputFilename,
                folder: this.uploadPath,
            })
                .on('end', () => resolve(`/uploads/${outputFilename}`))
                .on('error', (err) => reject(err));
        });
    }
};
exports.VideoService = VideoService;
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)()
], VideoService);
//# sourceMappingURL=video.service.js.map