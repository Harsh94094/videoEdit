import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video } from './entities/youtube-video.entity';
import * as fs from 'fs';
import * as path from 'path';
import * as tf from '@tensorflow/tfjs';
import { Subscription } from 'rxjs';
import { AdService } from 'src/ads/ads.service';

@Injectable()
export class VideoService {
  constructor(@InjectModel(Video.name) private videoModel: Model<Video>,
  @InjectModel(Subscription.name) private subModel: Model<Subscription>, 
  private readonly adService: AdService,

) {}


  async uploadVideo(file: Express.Multer.File, title: string, category: string, tags: string[]): Promise<Video> {
    const newVideo = new this.videoModel({ title, filePath: file.path, category, tags, views: 0 });
    return newVideo.save();
  }

  async streamVideoWithAd(videoId: string, userId: string) {
   
    const subscription = await this.subModel.findOne({ userId, plan: 'Premium' });
  
    if (subscription) {
      return { videoUrl: await this.getVideoUrl(videoId), isAd: false };
    }
  
   
    const ad = await this.adService.getRandomAd();
    
    if (!ad) {
   
      return { videoUrl: await this.getVideoUrl(videoId), isAd: false };
    }
  
   
    await this.adService.trackView(ad._id);
  
    
    return { videoUrl: ad.videoUrl, isAd: true, nextVideo: videoId };
  }
  
  private async getVideoUrl(videoId: string): Promise<string> {
    const video = (await this.videoModel.findById(videoId)) as Video;
    return video ? video.videoUrl : ''; 
  }
  async streamVideo(filename: string, range: string, res): Promise<void> {
    const filePath = path.join(__dirname, '..', '..', 'uploads', 'videos', filename);
    if (!fs.existsSync(filePath)) throw new NotFoundException('Video not found');

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;

    // if (range) {
    //   const parts = range.replace(/bytes=/, '').split('-');
    //   const start = parseInt(parts[0], 10);
    //   const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    //   const chunkSize = end - start + 1;

    //   const file = fs.createReadStream(filePath, { start, end });
    //   res.writeHead(206, {
    //     'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    //     'Accept-Ranges': 'bytes',
    //     'Content-Length': chunkSize,
    //     'Content-Type': 'video/mp4',
    //   });
    //   file.pipe(res);
    // } else {
      res.writeHead(200, { 'Content-Length': fileSize, 'Content-Type': 'video/mp4' });
      fs.createReadStream(filePath).pipe(res);
    // }
  }

  async incrementViews(videoId: string): Promise<void> {
    await this.videoModel.findByIdAndUpdate(videoId, { $inc: { views: 1 } });
  }

  async searchVideos(query: string): Promise<Video[]> {
    return this.videoModel.find({ title: { $regex: query, $options: 'i' } });
  }

  async getRecommendedVideos(userId: string): Promise<Video[]> {
    const allVideos = await this.videoModel.find();
    return allVideos.slice(0, 10);
  }
}
