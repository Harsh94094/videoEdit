import { VideoService } from './youtube-video.service';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    uploadVideo(file: Express.Multer.File, title: string, category: string, tags: string): Promise<import("./entities/youtube-video.entity").Video>;
    streamVideoByFilename(filename: string, res: any): Promise<void>;
    streamVideoWithAd(videoId: string, userId: string): Promise<{
        videoUrl: string;
        isAd: boolean;
        nextVideo?: undefined;
    } | {
        videoUrl: string;
        isAd: boolean;
        nextVideo: string;
    }>;
    incrementViews(id: string): Promise<{
        message: string;
    }>;
    searchVideos(query: string): Promise<import("./entities/youtube-video.entity").Video[]>;
    getRecommendations(userId: string): Promise<import("./entities/youtube-video.entity").Video[]>;
}
