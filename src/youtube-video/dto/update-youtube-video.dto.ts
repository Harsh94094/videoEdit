import { PartialType } from '@nestjs/mapped-types';
import { CreateYoutubeVideoDto } from './create-youtube-video.dto';

export class UpdateYoutubeVideoDto extends PartialType(CreateYoutubeVideoDto) {}
