import { VideoService } from './video.service';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    editVideo(filename: string, brightness?: string, saturation?: string, contrast?: string, sharpness?: string, blur?: string, grayscale?: string, rotate?: string, width?: string, height?: string, speed?: string, mute?: string, reverse?: string, watermark?: string, subtitles?: string): Promise<{
        message: string;
        filePath: string;
    }>;
    convertFormat(filename: string, format: string): Promise<{
        message: string;
        filePath: string;
    }>;
    cutVideo(filename: string, startTime: string, duration: string): Promise<{
        message: string;
        filePath: string;
    }>;
    extractAudio(filename: string, format: string): Promise<{
        message: string;
        filePath: string;
    }>;
    mergeVideos(files: string): Promise<{
        message: string;
        filePath: string;
    }>;
    generateThumbnail(filename: string, time: string): Promise<{
        message: string;
        filePath: string;
    }>;
}
