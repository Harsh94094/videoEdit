import { Controller, Post, UploadedFile, UseInterceptors, Get, Param, Res, Patch, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { VideoService } from './youtube-video.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/videos',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  async uploadVideo(
    @UploadedFile() file: Express.Multer.File,
    @Query('title') title: string,
    @Query('category') category: string,
    @Query('tags') tags: string,
  ) {
    if (!file) {
      throw new Error('No file uploaded!');
    }
    return this.videoService.uploadVideo(file, title, category, tags.split(','));
  }
  

  @Get('stream/:filename')
  async streamVideoByFilename(@Param('filename') filename: string, @Res() res) {
    console.log(res);
    return this.videoService.streamVideo(filename, res.req.headers.range, res);
  }
  
  @Get('stream/:videoId/:userId')
  async streamVideoWithAd(@Param('videoId') videoId: string, @Param('userId') userId: string) {
    return this.videoService.streamVideoWithAd(videoId, userId);
  }
  

  @Patch('view/:id')
  async incrementViews(@Param('id') id: string) {
    await this.videoService.incrementViews(id);
    return { message: 'View count updated' };
  }

  @Get('search')
  async searchVideos(@Query('query') query: string) {
    return this.videoService.searchVideos(query);
  }

  @Get('recommendations')
  async getRecommendations(@Param('userId') userId: string) {
    return this.videoService.getRecommendedVideos(userId);
  }



}
