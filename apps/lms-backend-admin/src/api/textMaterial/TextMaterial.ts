import { Lesson } from "../lesson/Lesson";

export type TextMaterial = {
  content: string | null;
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  lesson?: Lesson | null;
  updatedAt: Date;
};
