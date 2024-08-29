import { Video as TVideo } from "../api/video/Video";

export const VIDEO_TITLE_FIELD = "url";

export const VideoTitle = (record: TVideo): string => {
  return record.url?.toString() || String(record.id);
};
