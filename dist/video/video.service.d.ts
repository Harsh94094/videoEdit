export declare class VideoService {
    private uploadPath;
    applyFilters(filename: string, filters: any): Promise<string>;
    convertFormat(filename: string, format: string): Promise<string>;
    cutVideo(filename: string, startTime: number, duration: number): Promise<string>;
    extractAudio(filename: string, format: string): Promise<string>;
    mergeVideos(files: string[]): Promise<string>;
    concatenateVideos(files: string[]): Promise<string>;
    generateThumbnail(filename: string, time: number): Promise<string>;
}
