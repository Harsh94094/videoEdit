import { Controller, Get, Query } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  // ✅ Apply Filters, Resize, Rotate, Speed Control, Watermark, Mute, Reverse, Subtitles
  @Get('edit')
  async editVideo(
    @Query('filename') filename: string,
    @Query('brightness') brightness?: string,
    @Query('saturation') saturation?: string,
    @Query('contrast') contrast?: string,
    @Query('sharpness') sharpness?: string,
    @Query('blur') blur?: string,
    @Query('grayscale') grayscale?: string,
    @Query('rotate') rotate?: string,
    @Query('width') width?: string,
    @Query('height') height?: string,
    @Query('speed') speed?: string,
    @Query('mute') mute?: string,
    @Query('reverse') reverse?: string,
    @Query('watermark') watermark?: string,
    @Query('subtitles') subtitles?: string,
  ) {
    const filters = {
      brightness: brightness ? parseFloat(brightness) : undefined,
      saturation: saturation ? parseFloat(saturation) : undefined,
      contrast: contrast ? parseFloat(contrast) : undefined,
      sharpness: sharpness ? parseFloat(sharpness) : undefined,
      blur: blur ? parseFloat(blur) : undefined,
      grayscale: grayscale === 'true' ? true : undefined,
      rotate: rotate ? parseFloat(rotate) : undefined,
      width: width ? parseInt(width) : undefined,
      height: height ? parseInt(height) : undefined,
      speed: speed ? parseFloat(speed) : undefined,
      mute: mute === 'true' ? true : undefined,
      reverse: reverse === 'true' ? true : undefined,
      watermark: watermark || undefined,
      subtitles: subtitles || undefined,
    };

    const editedFilePath = await this.videoService.applyFilters(filename, filters);
    return { message: 'Video edited successfully', filePath: editedFilePath };
  }


  @Get('convert')
  async convertFormat(@Query('filename') filename: string, @Query('format') format: string) {
    const convertedFilePath = await this.videoService.convertFormat(filename, format);
    return { message: 'Video converted successfully', filePath: convertedFilePath };
  }


  @Get('cut')
  async cutVideo(
    @Query('filename') filename: string,
    @Query('startTime') startTime: string,
    @Query('duration') duration: string,
  ) {
    const cutFilePath = await this.videoService.cutVideo(filename, parseFloat(startTime), parseFloat(duration));
    return { message: 'Video cut successfully', filePath: cutFilePath };
  }

 
  @Get('extract-audio')
  async extractAudio(@Query('filename') filename: string, @Query('format') format: string) {
    const audioFilePath = await this.videoService.extractAudio(filename, format);
    return { message: 'Audio extracted successfully', filePath: audioFilePath };
  }


  @Get('merge')
  async mergeVideos(@Query('files') files: string) {
    const fileList = files.split(',').map(file => file.trim());
    const mergedFilePath = await this.videoService.mergeVideos(fileList);
    return { message: 'Videos merged successfully', filePath: mergedFilePath };
  }

 
  @Get('thumbnail')
  async generateThumbnail(@Query('filename') filename: string, @Query('time') time: string) {
    const thumbnailPath = await this.videoService.generateThumbnail(filename, parseFloat(time));
    return { message: 'Thumbnail generated successfully', filePath: thumbnailPath };
  }
}


  