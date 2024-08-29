import { Lesson } from "../lesson/Lesson";

export type Video = {
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  lesson?: Lesson | null;
  updatedAt: Date;
  url: string | null;
};
