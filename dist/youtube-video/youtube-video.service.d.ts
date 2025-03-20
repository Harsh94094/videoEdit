import { Model } from 'mongoose';
import { Video } from './entities/youtube-video.entity';
import { Subscription } from 'rxjs';
import { AdService } from 'src/ads/ads.service';
export declare class VideoService {
    private videoModel;
    private subModel;
    private readonly adService;
    constructor(videoModel: Model<Video>, subModel: Model<Subscription>, adService: AdService);
    uploadVideo(file: Express.Multer.File, title: string, category: string, tags: string[]): Promise<Video>;
    streamVideoWithAd(videoId: string, userId: string): Promise<{
        videoUrl: string;
        isAd: boolean;
        nextVideo?: undefined;
    } | {
        videoUrl: string;
        isAd: boolean;
        nextVideo: string;
    }>;
    private getVideoUrl;
    streamVideo(filename: string, range: string, res: any): Promise<void>;
    incrementViews(videoId: string): Promise<void>;
    searchVideos(query: string): Promise<Video[]>;
    getRecommendedVideos(userId: string): Promise<Video[]>;
}
