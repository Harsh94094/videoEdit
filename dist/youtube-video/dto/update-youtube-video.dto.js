"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateYoutubeVideoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_youtube_video_dto_1 = require("./create-youtube-video.dto");
class UpdateYoutubeVideoDto extends (0, mapped_types_1.PartialType)(create_youtube_video_dto_1.CreateYoutubeVideoDto) {
}
exports.UpdateYoutubeVideoDto = UpdateYoutubeVideoDto;
//# sourceMappingURL=update-youtube-video.dto.js.map