import { Lesson } from "../lesson/Lesson";

export type Video = {
  createdAt: Date;
  id: string;
  lesson?: Lesson | null;
  updatedAt: Date;
  url: string | null;
};
