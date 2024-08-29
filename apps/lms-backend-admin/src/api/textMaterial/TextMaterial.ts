import { Lesson } from "../lesson/Lesson";

export type TextMaterial = {
  content: string | null;
  createdAt: Date;
  id: string;
  lesson?: Lesson | null;
  updatedAt: Date;
};
