import { Injectable } from '@nestjs/common';
import * as ffmpeg from 'fluent-ffmpeg';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class VideoService {
  private uploadPath = './uploads';

  async applyFilters(filename: string, filters: any): Promise<string> {
    const inputPath = path.join(this.uploadPath, filename);
    const outputFilename = `edited-${filename}`;
    const outputPath = path.join(this.uploadPath, outputFilename);

    return new Promise((resolve, reject) => {
      let command = ffmpeg(inputPath);

  
      if (filters.brightness) command.videoFilters(`eq=brightness=${filters.brightness}`);
      if (filters.saturation) command.videoFilters(`eq=saturation=${filters.saturation}`);
      if (filters.contrast) command.videoFilters(`eq=contrast=${filters.contrast}`);
      if (filters.blur) command.videoFilters(`boxblur=${filters.blur}`);
      if (filters.grayscale) command.videoFilters('hue=s=0');

   
      if (filters.width && filters.height) command.size(`${filters.width}x${filters.height}`);

   
      if (filters.rotate) command.videoFilters(`rotate=${filters.rotate}`);

  
      if (filters.speed) command.videoFilters(`setpts=${1 / filters.speed}*PTS`).audioFilters(`atempo=${filters.speed}`);

 
      if (filters.mute) command.noAudio();

    
      if (filters.reverse) command.videoFilters('reverse').audioFilters('areverse');

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

  async convertFormat(filename: string, format: string): Promise<string> {
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

  // ✅ Cut Video (Trim)
  async cutVideo(filename: string, startTime: number, duration: number): Promise<string> {
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


  async extractAudio(filename: string, format: string): Promise<string> {
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

  async mergeVideos(files: string[]): Promise<string> {
    const convertedFiles = await Promise.all(files.map(async (file) => {
      const outputFilename = `converted-${file}.mp4`;
      const outputPath = path.join(this.uploadPath, outputFilename);
  
      return new Promise<string>((resolve, reject) => {
        ffmpeg(path.join(this.uploadPath, file))
          .output(outputPath)
          .videoCodec('libx264') // Convert to H.264
          .audioCodec('aac') // Convert to AAC audio
          .format('mp4')
          .on('end', () => resolve(outputFilename))
          .on('error', (err) => reject(err))
          .run();
      });
    }));
  
    return this.concatenateVideos(convertedFiles);
  }
  async concatenateVideos(files: string[]): Promise<string> {
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
  
  

  // ✅ Generate Thumbnail
  async generateThumbnail(filename: string, time: number): Promise<string> {
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
}
